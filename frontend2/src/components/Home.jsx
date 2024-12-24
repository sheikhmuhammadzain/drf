import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedToken = localStorage.getItem('token');
    
    if (!storedToken || !storedUsername) {
      alert('You are not signed in. Please sign up first.');
      navigate('/login');
      return;
    }

    setUsername(storedUsername);
    setToken(storedToken);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
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
              <span className="label">JWT Token:</span>
              <div className="token-container">
                <span className="token">{token}</span>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className="button">Logout</button>
      </div>
    </div>
  );
};

export default Home;
