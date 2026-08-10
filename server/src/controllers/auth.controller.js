import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import blackListModel from "../models/blackList.model.js";
import otpModel from "../models/otp.model.js";
import userModel from "../models/user.model.js";
import sendOTP from "../services/sendMail.service.js";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";



const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function handleUserVerification(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({ msg: "username or email already exists" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await sendOTP(email, otp);

  const passwordHash = await bcrypt.hash(password, 10);

  await otpModel.create({
    username,
    email,
    otp,
    password: passwordHash,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000),
  });

  return res.status(201).json({ msg: "OTP Sent successfully" });
}

export async function handleUserRegistration(req, res) {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ msg: "Email and OTP are required" });
  }

  const otpData = await otpModel.findOne({ email, otp });

  if (!otpData) {
    return res.status(401).json({ msg: "Invalid or expired OTP" });
  }

  const user = await userModel.create({
    username: otpData.username,
    email: otpData.email,
    password: otpData.password,
  });

  await otpModel.deleteOne({ _id: otpData._id });

  const token = jwt.sign({ id: user._id }, config.JWT_SECRET);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(201).json({
    msg: "User registered successfully",
    user,
  });
}

export async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: "email not exists" });
  }

  if (user.authProvider === "google") {
    return res.status(400).json({
      msg: "This account uses Google login. Please continue with Google."
    });
  }


  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ msg: "incorrect password" });
  }

 const token = jwt.sign(
    {
      id: user._id,
      jti: crypto.randomUUID(),
    },
    config.JWT_SECRET
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({ msg: "login successfully", user });
}

export async function handleUserLogout(req, res) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  await blackListModel.create({ token });
  res.clearCookie("token");

  return res.status(200).json({ msg: "Logout successful" });
}

export async function handleUserGetMe(req, res) {
  const user = await userModel.findById(req.user.id);

  return res.status(200).json({ msg: "user fetch successful", user });
}

export async function handleGoogleLogin(req, res) {
  try {
    const {credential}  = req.body;

    if (!credential) {
      return res.status(400).json({
        msg: "Google credential is required",
      });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const {
      sub: googleId,
      email,
      name,
      picture,
    } = payload;

    if (!email) {
      return res.status(400).json({
        msg: "Google account email not found",
      });
    }

    let user = await userModel.findOne({ email });

    if (!user) {
      let username = name
        ?.replace(/\s+/g, "")
        .toLowerCase();

      if (!username) {
        username = `user${Date.now()}`;
      }

      const isUsernameExists = await userModel.findOne({
        username,
      });

      if (isUsernameExists) {
        username = `${username}${Date.now()}`;
      }

      user = await userModel.create({
        username,
        email,
        googleId,
        profileImage: picture,
        authProvider: "google",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        jti: crypto.randomUUID(),
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      msg: "Google login successful",
      user,
    });

  } catch (error) {
    console.error("Google login error:", error);

    return res.status(500).json({
      msg: "Google authentication failed",
    });
  }
}

