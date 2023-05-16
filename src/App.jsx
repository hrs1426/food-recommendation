import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPage from "./pages/ForgotPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/register" element={<ForgotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
