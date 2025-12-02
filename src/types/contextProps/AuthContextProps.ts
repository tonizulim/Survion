import type { Credentials, User } from "..";

export interface AuthContextType {
  user: User | null;
  loadingUser: boolean;
  loginUser: ({}: loginUserProps) => void;
}

export interface loginUserProps {
  credentials: Credentials;
}
