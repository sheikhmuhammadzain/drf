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
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome, {username}! 👋</h1>
        <div style={styles.card}>
          <h3 style={styles.subtitle}>Your Profile</h3>
          <div style={styles.infoContainer}>
            <div style={styles.infoItem}>
              <span style={styles.label}>Username:</span>
              <span style={styles.value}>{username}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.label}>JWT Token:</span>
              <div style={styles.tokenContainer}>
                <span style={styles.token}>{token}</span>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '1rem',
  },
  content: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
  },
  subtitle: {
    color: '#333',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #007bff',
    paddingBottom: '0.5rem',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  value: {
    color: '#333',
    fontSize: '1.1rem',
  },
  tokenContainer: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  token: {
    wordBreak: 'break-all',
    fontSize: '0.9rem',
    color: '#666',
    fontFamily: 'monospace',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
  },
};

export default Home;
