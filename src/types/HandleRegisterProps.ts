import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { RegisterCredentials } from "./credentials";

export interface HandleRegisterProps {
  e: FormEvent<HTMLFormElement>;
  credentials: RegisterCredentials;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
  setSuccessRegistration: Dispatch<SetStateAction<boolean>>;
}
