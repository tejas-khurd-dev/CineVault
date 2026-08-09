import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-black">
      <div className="hidden md:flex md:w-1/2 flex-col justify-between p-10 bg-black border-r border-white/10 relative overflow-hidden">
        <div className="relative z-10">
          <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
            <img src={assets.logo} alt="Book Movie" className="w-55" />
          </div>
          <h1 className="text-4xl font-bold leading-tight mt-12 max-w-md">
            Sign in to book seats and manage your movie nights.
          </h1>
          <p className="text-sm text-gray-400 mt-4 max-w-md">
            Use the same email and password flow across the client and admin app, just like the AI Resume Analyzer setup.
          </p>
        </div>

        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="/backgroundImage.jpg"
            alt=""
            className="h-[28rem] w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
