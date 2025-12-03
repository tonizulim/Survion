import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./i18n/i18n.js";
import { AuthProvider } from "./contexts";
import { LoginRegisterBlocker, NavBar, PrivateRoute } from "./components";
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
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <UserDashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute requiredRole="admin">
                <UserDashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/survey/new"
            element={
              <PrivateRoute>
                <NewSurveyPage />
              </PrivateRoute>
            }
          />
          <Route path="/survey/take/:id" element={<TakeSurveyPage />} />
          <Route
            path="/survey/results/:id"
            element={
              <PrivateRoute>
                <ResultPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
