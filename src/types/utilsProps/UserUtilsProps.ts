import type { Dispatch, SetStateAction } from "react";
import type { Credentials, RegisterCredentials, User } from "..";
import type { NavigateFunction } from "react-router-dom";

export interface HandleLoginProps {
  credentials: Credentials;
  setLoadingUser: Dispatch<SetStateAction<boolean>>;
  setUser: (userData: User) => void;
  setError: Dispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
  setSuccessRegistration: Dispatch<SetStateAction<boolean>>;
}

export interface HandleLogoutProps {
  setLoadingUser: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export interface HandleRefreshProps {
  setLoadingUser: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export interface HandleRegisterProps {
  credentials: RegisterCredentials;
  setLoadingUser: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
  setSuccessRegistration: Dispatch<SetStateAction<boolean>>;
}
