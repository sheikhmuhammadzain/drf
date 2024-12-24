import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/signup/', {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (error) {
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Username"
            ref={usernameRef}
            className="input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            className="input"
            required
          />
          <button type="submit" className="button">Sign Up</button>
        </form>
        <p className="text">
          Already have an account? <Link to="/login" className="link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
