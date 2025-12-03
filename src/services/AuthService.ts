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

export const logout = async () => {
  try {
    const response = await apiClient.delete("/auth/logout");

    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const refresh = async () => {
  try {
    const response = await apiClient.get("/auth/refresh");

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
