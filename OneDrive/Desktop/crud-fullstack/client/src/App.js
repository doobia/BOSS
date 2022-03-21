import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homes from "./pages/Homes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

import { AuthContext } from "./Context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Homes /> : <Login />} />
        <Route path="/login" element={user ? <Homes /> : <Login />} />
        <Route path="/signup" element={user ? <Homes /> : <Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
