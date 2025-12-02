import { createContext, useContext, useState, type ReactNode } from "react";
import type { AuthContextType, loginUserProps, User } from "../types";
import { handleLogin } from "../utils";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginUser = ({ credentials }: loginUserProps) => {
    handleLogin({ credentials, setLoadingUser, setUser, navigate });
  };

  return (
    <AuthContext.Provider value={{ user, loadingUser, loginUser }}>
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
