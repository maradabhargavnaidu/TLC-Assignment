import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddTodo from "./Components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateTodo from "./Components/UpdateTodo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/updatetodo/:Id" element={<UpdateTodo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
