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
import { LoginRegisterBlocker } from "./components/LoginRegisterBlocker.js";
import { CreateNewSurveyPage } from "./pages/CreateNewSurveyPage.js";
import { TakeSurvey } from "./pages/TakeSurvey.js";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
          <Route
            path="/login"
            element={
              <LoginRegisterBlocker>
                <LogInPage />
              </LoginRegisterBlocker>
            }
          />
          <Route
            path="/register"
            element={
              <LoginRegisterBlocker>
                <RegisterPage />
              </LoginRegisterBlocker>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserDashboardPage />
              </PrivateRoute>
            }
          />
          <Route path="/survey/new" element={<CreateNewSurveyPage />} />
          <Route path="/survey/take/:id" element={<TakeSurvey />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
