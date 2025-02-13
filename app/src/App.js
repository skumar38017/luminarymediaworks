import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import FounderShowreel from "./FounderShowreel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founder-showreel" element={<FounderShowreel />} />
      </Routes>
    </Router>
  );
}

export default App;
