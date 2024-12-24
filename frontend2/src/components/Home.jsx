import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedAccessToken = localStorage.getItem("access_token");

    if (!storedAccessToken || !storedUsername) {
      alert("You are not signed in. Please sign up first.");
      navigate("/login");
      return;
    }

    setUsername(storedUsername);
    setAccessToken(storedAccessToken);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Welcome, {username}!</h1>
        <div className="card">
          <h3 className="subtitle">Your Profile</h3>
          <div className="info-container">
            <div className="info-item">
              <span className="label">Username:</span>
              <span className="value">{username}</span>
            </div>
            <div className="info-item">
              <span className="label">Access Token:</span>
              <div className="token-container">
                <span className="token">{accessToken}</span>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className="button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
