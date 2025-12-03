import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { NoPage } from "../pages";

interface PrivateRouteProps {
  children: ReactNode;
  requiredRole?: "admin" | "user"; // optional
}

export const PrivateRoute = ({ children, requiredRole }: PrivateRouteProps) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    const isAdminRequired = requiredRole === "admin";

    if (isAdminRequired && !user.isAdmin) {
      return <NoPage />;
    }
  }

  if (!user.isApproved || !user.isEmailVerified) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
