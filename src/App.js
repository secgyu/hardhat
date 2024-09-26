import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/control" element={<ControlPanel />} />
      </Routes>
    </div>
  );
}

export default App;
