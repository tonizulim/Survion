import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../types/User";
import type { UserContextType } from "../types/UserContextType";

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const setLoginUser = (userData: User) => setUser(userData);
  const removeUser = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setLoginUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
