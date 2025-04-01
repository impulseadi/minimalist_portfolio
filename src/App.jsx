import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Navigate to="/" replace />} /> {/* Redirect /home to / */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <Footer/>
        <Analytics/>
      </div>
    </Router>
  );
};

export default App;
