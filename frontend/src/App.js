import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginButton />} />
      </Routes>
    </Router>
  );
}

export default App;
