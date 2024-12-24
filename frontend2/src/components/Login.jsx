import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", usernameRef.current.value);
      navigate("/home");
    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Login</h2>
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
          <button type="submit" className="button">
            Login
          </button>
        </form>
        <p className="text">
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
