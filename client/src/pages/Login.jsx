import React, { useEffect, useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth.js";
import Loading from "../components/Loading.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import GoogleButton from "../components/GoogleButton.jsx";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });


  const { loading, handleLogin, error, setError, handleGoogleLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (error) setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await handleLogin(form);

    if (user) {
      toast.success("Logged in successfully");
      navigate("/");
    }
  };

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
      <h2 className="text-2xl font-bold mb-2 text-primary">Welcome back</h2>
      <p className="text-sm mb-8 text-muted">
        Sign in to continue booking your next movie.
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

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-medium text-muted">
              Password
            </label>
          </div>
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
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg font-medium text-white bg-primary border border-primary/80 hover:brightness-110 transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Log in
        </button>
      </form>

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
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-primary font-medium hover:opacity-80">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
