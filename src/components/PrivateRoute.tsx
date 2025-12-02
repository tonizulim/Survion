import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthContext();

  return user?.isApproved && user.isEmailVerified ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
