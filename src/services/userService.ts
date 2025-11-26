import type { LoginProps, RegisterProps } from "../types";
import { apiClient } from "./apiClient";

export const login = async ({ credentials }: LoginProps) => {
  try {
    const response = await apiClient.post("/user/login", credentials);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const register = async ({ credentials }: RegisterProps) => {
  try {
    const response = await apiClient.post("/user/register", credentials);

    return response;
  } catch (error: any) {
    return error.response;
  }
};
