import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { Credentials, RegisterCredentials, User } from "..";
import type { NavigateFunction } from "react-router-dom";

export interface HandleLoginProps {
  e: FormEvent<HTMLFormElement>;
  credentials: Credentials;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
  setLoginUser: (userData: User) => void;
}

export interface HandleRegisterProps {
  e: FormEvent<HTMLFormElement>;
  credentials: RegisterCredentials;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
  setSuccessRegistration: Dispatch<SetStateAction<boolean>>;
}
