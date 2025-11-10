import type { User } from "./User";

export interface UserContextType {
  user: User | null;
  setLoginUser: (userData: User) => void;
  removeUser: () => void;
}
