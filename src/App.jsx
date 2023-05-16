import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPage from "./pages/ForgotPage";
import LoginPage from "./pages/LoginPage";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<ForgotPage />} />
        <Route path="/restaurant" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
