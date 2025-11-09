import type { LoginProps } from "../types/LoginProps";
import { apiClient } from "./apiClient";

export const login = async ({ credentials }: LoginProps) => {
  try {
    const response = await apiClient.post("/user/login", credentials);

    return response;
  } catch (error: any) {
    return error.response;
  }
};
