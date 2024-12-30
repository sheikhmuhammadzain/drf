import { Navigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const username = localStorage.getItem("username");

  const refreshAccess = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/token/refresh/", {
        refresh: refreshToken
      });
      localStorage.setItem("access_token", response.data.access);
      return response.data.access;
    } catch (error) {
      console.error("Error refreshing token:", error);
      return null;
    }
  };

  if (!accessToken || !refreshToken || !username) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwt_decode(accessToken);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      // Token expired, try to refresh
      const newToken = refreshAccess();
      if (!newToken) {
        return <Navigate to="/login" replace />;
      }
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
