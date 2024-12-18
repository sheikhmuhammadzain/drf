import "./App.css";
import axios from "axios";
import { useEffect } from "react";
function App() {
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
      </>
  );
}

export default App;
