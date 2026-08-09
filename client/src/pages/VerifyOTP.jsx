import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Loading from "../components/Loading";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");

  const { loading, handleRegistration, error, setError } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error) setError("");

    if (!email) {
      toast.error("Email not found. Please register again.");
      navigate("/register");
      return;
    }

    const user = await handleRegistration({ email, otp });

    if (user) {
      toast.success("Account created successfully");
      navigate("/");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-2 text-primary">
        Verify OTP
      </h2>

      <p className="text-sm mb-8 text-muted">
        Enter the 6-digit code sent to
        <br />
        <span className="font-medium text-primary">{email}</span>
      </p>

      {error && (
        <div
          role="alert"
          className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-xs font-medium mb-2 text-muted">
            OTP
          </label>

          <div className="relative">
            <ShieldCheck
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => {
                if (error) setError("");
                setOtp(e.target.value);
              }}
              placeholder="Enter OTP"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-muted outline-none focus:border-primary transition"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg font-medium text-white bg-primary border border-primary/80 hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Verify OTP
        </button>
      </form>
    </AuthLayout>
  );
};

export default VerifyOTP;
