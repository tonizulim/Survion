import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export const LoginRegisterBlocker = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext();

  return user?.isApproved && user.isEmailVerified ? (
    <Navigate to="/user" />
  ) : (
    children
  );
};
