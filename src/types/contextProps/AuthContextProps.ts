import type { Credentials, RegisterCredentials, User } from "..";

export interface AuthContextType {
  user: User | null;
  loadingUser: boolean;
  error: string;
  successRegistration: boolean;
  loginUser: ({}: LoginUserProps) => void;
  logoutUser: () => void;
  refresh: () => void;
  registerUser: ({}: RegisterUserProps) => void;
}

export interface LoginUserProps {
  credentials: Credentials;
}

export interface RegisterUserProps {
  credentials: RegisterCredentials;
}
