import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type {
  AuthContextType,
  LoginUserProps,
  RegisterUserProps,
  User,
} from "../types";
import {
  handleLogin,
  handleLogout,
  handleRefresh,
  handleRegister,
} from "../utils";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const [successRegistration, setSuccessRegistration] =
    useState<boolean>(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refresh();
  }, []);

  const loginUser = ({ credentials }: LoginUserProps) => {
    handleLogin({
      credentials,
      setLoadingUser,
      setUser,
      setError,
      setSuccessRegistration,
      navigate,
    });
  };

  const logoutUser = () => {
    handleLogout({ setLoadingUser, setUser, navigate });
  };

  const refresh = () => {
    handleRefresh({ setLoadingUser, setUser });
  };

  const registerUser = ({ credentials }: RegisterUserProps) => {
    handleRegister({
      credentials,
      setLoadingUser,
      setError,
      setSuccessRegistration,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingUser,
        error,
        successRegistration,
        loginUser,
        logoutUser,
        refresh,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
