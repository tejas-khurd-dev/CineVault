import React, { useEffect, useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import GoogleButton from "../components/GoogleButton";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { loading, handleSendOTP, error, setError, handleGoogleLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (error) setError("");

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sent = await handleSendOTP(form);

    if (sent) {
      toast.success("OTP sent to your email");

      navigate("/verify-otp", {
        state: {
          email: form.email,
        },
      });
    }
  };

  // Google callback
 const handleGoogleCallback = async (response) => {
    const user = await handleGoogleLogin(response.credential);

    if (user) {
      toast.success("Google login successful");
      navigate("/");
    }
  };


  if (loading) {
    return <Loading />;
  }

  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold text-white">
        Create account
      </h1>

      <p className="mt-2 text-sm text-muted">
        Create your Book Movie account in a few steps.
      </p>

      {error && (
        <div
          role="alert"
          className="mb-5 mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100"
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mt-6"
      >
        {/* Username */}
        <div>
          <label className="block text-xs font-medium mb-2 text-muted">
            Username
          </label>

          <div className="relative">
            <User
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              name="username"
              required
              value={form.username}
              onChange={handleChange}
              placeholder="janedoe"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-muted outline-none focus:border-primary transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium mb-2 text-muted">
            Email address
          </label>

          <div className="relative">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-muted outline-none focus:border-primary transition"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-medium mb-2 text-muted">
            Password
          </label>

          <div className="relative">
            <Lock
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-9 pr-9 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-muted outline-none focus:border-primary transition"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((v) => !v)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          </div>
        </div>

        {/* Normal registration */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg font-medium text-white bg-primary border border-primary/80 hover:brightness-110 transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Create account
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="h-px flex-1 bg-white/10" />

        <span className="text-xs text-muted">
          OR
        </span>

        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Google button */}
      <div className="flex justify-center items-center">
          <GoogleButton onSuccess={handleGoogleCallback} />
      </div>
      

      <p className="text-sm text-center mt-6 text-muted">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary font-medium hover:opacity-80"
        >
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;