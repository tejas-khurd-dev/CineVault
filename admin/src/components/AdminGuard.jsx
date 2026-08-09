import Loading from "./Loading";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AdminGuard = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p>You are not authorized to access this page.</p>

        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 rounded-md bg-primary text-white"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return children;
};

export default AdminGuard;