import type { User } from ".";

export interface UserContextType {
  user: User | null;
  setLoginUser: (userData: User) => void;
  removeUser: () => void;
}
