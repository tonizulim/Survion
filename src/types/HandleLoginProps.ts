import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { Credentials } from "./credentials";
import type { NavigateFunction } from "react-router-dom";
import type { User } from "./User";

export interface HandleLoginProps {
  e: FormEvent<HTMLFormElement>;
  credentials: Credentials;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
  setUser: Dispatch<SetStateAction<User | null>>;
}
