import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./i18n/i18n.js";
import { HomePage } from "./pages/HomePage";
import { NoPage } from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
