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
import { LoginRegisterBlocker } from "./components/LoginRegisterBlocker.js";
import { CreateNewSurveyPage } from "./pages/CreateNewSurveyPage.js";
import { TakeSurveyPage } from "./pages/TakeSurveyPage.js";
import { ResultPage } from "./pages/ResultPage.js";

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
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/survey/new" element={<CreateNewSurveyPage />} />
          <Route path="/survey/take/:id" element={<TakeSurveyPage />} />
          <Route path="/survey/result/:id" element={<ResultPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
