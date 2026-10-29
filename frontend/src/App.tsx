import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
type Props = {};

const App = (props: Props) => {
  const [students, setStudents] = React.useState([]);

  useEffect(() => {
    const fetchstudents = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/students/");
      setStudents(res.data);
      console.log(res.data);
    };
    fetchstudents();
  }, []);

  return (
    <div className="container">
      <h1>Students</h1>
      <div className="student-list">
        {students.map((student: any) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>created_at: {student.created_at}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
