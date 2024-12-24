import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");
  const username = localStorage.getItem("username");

  if (!accessToken || !username) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
