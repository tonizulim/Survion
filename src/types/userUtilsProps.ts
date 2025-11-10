import type { Credentials, RegisterCredentials } from "./credentials";

export interface LoginProps {
  credentials: Credentials;
}

export interface RegisterProps {
  credentials: RegisterCredentials;
}
