import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      <div className="hidden md:flex md:w-1/2 flex-col justify-between p-10 bg-black border-r border-white/10 relative overflow-hidden">
        <div className="relative z-10">
          <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
            <img src={assets.logo} alt="Book Movie" className="w-56" />
          </div>
          <h1 className="text-4xl font-bold leading-tight mt-12 max-w-md">
            Sign in to book seats and manage your movie nights.
          </h1>
          <p className="text-sm text-gray-400 mt-4 max-w-md">
            Use one account to manage your tickets, favourites, and profile from any device.
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

      <div className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 sm:px-8 py-8 sm:py-10 shadow-2xl">
          <div className="mb-6 md:hidden">
            <img src={assets.logo} alt="Book Movie" className="w-36" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
