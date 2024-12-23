import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  async function fetchData() {
    const response = await axios.get("http://127.0.0.1:8000/api/students/");
    console.log(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>hello</h1>
      <button onClick={fetchData}>fetch data</button>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post(
              "http://127.0.0.1:8000/api/token/",
              {
                username: emailRef.current.value,
                password: passwordRef.current.value,
              }
            );
            console.log(response.data);
            localStorage.setItem("token", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            localStorage.setItem("username", emailRef.current.value);
            localStorage.setItem("password", passwordRef.current.value);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" ref={emailRef} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <button type="submit">Login</button>
      </form>
      
      {localStorage.getItem("token")}
    </>
  );
}

export default App;
