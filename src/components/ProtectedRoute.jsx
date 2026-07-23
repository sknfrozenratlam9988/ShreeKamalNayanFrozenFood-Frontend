import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { adminInfo } = useSelector((state) => state.auth);
  if (!adminInfo) return <Navigate to="/admin/login" replace />;
  return children;
};

export default ProtectedRoute;
