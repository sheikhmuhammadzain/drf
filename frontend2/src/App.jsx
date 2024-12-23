import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // async function fetchData() {
  //   const response = await axios.get("http://127.0.0.1:8000/api/students/");
  //   console.log(response.data);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
