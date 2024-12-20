import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import Callback from "./components/Callback";
import ProtectedResource from "./components/ProtectedResource";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/protected" element={<ProtectedResource />} />
      </Routes>
    </Router>
  );
}

export default App;
