import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='relative bg-[url("/upsideDownBg.jpg")] bg-cover bg-center h-screen pt-35 pb-5'>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex h-full items-center px-20">
        <div className="max-w-xl">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Signal lost
          </p>

          <h1 className="text-white text-8xl md:text-9xl font-bold mb-4">
            404
          </h1>

          <p className="text-gray-200 text-lg mb-2">
            You've wandered into the Upside Down.
          </p>

          <p className="text-gray-400 text-sm mb-8 max-w-sm">
            This page doesn't exist on this side. Head back before something
            notices you're here.
          </p>

          <button
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
            className="bg-primary text-white text-sm font-medium tracking-wide uppercase px-6 py-3 rounded"
          >
            Back to safety
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;