import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./i18n/i18n.js";
import { HomePage } from "./pages/HomePage";
import { NoPage } from "./pages/NoPage";
import { NavBar } from "./components/NavBar.js";
import { LogInPage } from "./pages/LogInPage.js";
import { RegisterPage } from "./pages/RegisterPage.js";
import { UserProvider } from "./contexts/UserContext.js";
import { UserDashboardPage } from "./pages/UserDashboardPage.js";
import { PrivateRoute } from "./components/PrivateRoute.js";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserDashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
