import type { LoginProps, RegisterProps } from "../types";
import { apiClient } from "./apiClient";

export const login = async ({ credentials }: LoginProps) => {
  try {
    const response = await apiClient.post("/auth/login", credentials);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const register = async ({ credentials }: RegisterProps) => {
  try {
    const response = await apiClient.post("/auth/register", credentials);

    return response;
  } catch (error: any) {
    return error.response;
  }
};
