import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./i18n/i18n.js";
import { AuthProvider } from "./contexts";
import { LoginRegisterBlocker, NavBar } from "./components";
import {
  HomePage,
  NoPage,
  LogInPage,
  RegisterPage,
  UserDashboardPage,
  NewSurveyPage,
  TakeSurveyPage,
  ResultPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
          <Route path="/survey/new" element={<NewSurveyPage />} />
          <Route path="/survey/take/:id" element={<TakeSurveyPage />} />
          <Route path="/survey/results/:id" element={<ResultPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
