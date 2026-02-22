// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/tasks/")
//       .then((response) => {
//         setTasks(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Django + React Task List</h1>

//       {tasks.length === 0 ? (
//         <p>No tasks available</p>
//       ) : (
//         tasks.map((task) => (
//           <div
//             key={task.id}
//             style={{
//               border: "1px solid black",
//               margin: "10px",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>{task.title}</h3>
//             <p>
//               Status: {task.completed ? "Completed" : "Pending"}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Landing from "./pages/Landing";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;