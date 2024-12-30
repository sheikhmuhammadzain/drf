import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

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
    <div className="home-container">
      <header className="home-header">
        <h1 className="welcome-message">Welcome, {username}!</h1>
        <div className="nav-buttons">
          <button onClick={handleLogout} className="nav-button logout-button">
            Logout
          </button>
        </div>
      </header>
      
      <div className="home-content">
        <div className="content-section">
          <h2 className="section-title">Your Profile</h2>
          <div className="section-content">
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Access Token:</strong></p>
            <div style={{ wordBreak: 'break-all' }}>
              {accessToken}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
