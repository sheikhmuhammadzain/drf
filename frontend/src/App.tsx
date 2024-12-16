import React, { useEffect } from "react";
import axios from "axios";

type Props = {};

const App = (props: Props) => {
  const [students, setStudents] = React.useState([]);

  useEffect(() => {
    const fetchstudents = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/students/");
      setStudents(response.data);
      console.log(response.data);
    };
    fetchstudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <div>
        {students.map((student: any) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
