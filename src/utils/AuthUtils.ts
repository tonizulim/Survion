import { login, logout, refresh, register } from "../services";
import type {
  HandleRegisterProps,
  HandleLoginProps,
  HandleLogoutProps,
  HandleRefreshProps,
} from "../types";

export const handleLogin = async ({
  credentials,
  setLoadingUser,
  setUser,
  setError,
  navigate,
  setSuccessRegistration,
}: HandleLoginProps) => {
  setLoadingUser(true);

  try {
    const res = await login({ credentials });

    if (res.status === 200) {
      const user = res.data;

      setUser(user);

      if (user.isApproved && user.isEmailVerified) {
        navigate("/dashboard");
      } else {
        setSuccessRegistration(true);
      }
    } else {
      setError(res.data.detail);
    }
  } catch (err) {
    console.error(err);
  }

  setLoadingUser(false);
};

export const handleLogout = async ({
  setLoadingUser,
  navigate,
  setUser,
}: HandleLogoutProps) => {
  setLoadingUser(true);

  try {
    const res = await logout();

    if (res.status === 200) {
      setUser(null);
      navigate("/");
    }
  } catch (err) {
    console.error(err);
  }

  setLoadingUser(false);
};

export const handleRefresh = async ({
  setLoadingUser,
  setUser,
}: HandleRefreshProps) => {
  setLoadingUser(true);

  try {
    const res = await refresh();

    if (res.status === 200) {
      setUser(res.data);
    } else {
    }
  } catch (err) {
    console.error(err);
  }

  setLoadingUser(false);
};

export const handleRegister = async ({
  credentials,
  setLoadingUser,
  setSuccessRegistration,
  setError,
}: HandleRegisterProps) => {
  setLoadingUser(true);

  try {
    const res = await register({ credentials });

    if (res.status === 200) {
      setSuccessRegistration(true);
    } else {
      setError(res.data.detail);
    }
  } catch (err) {
    console.error(err);
  }

  setLoadingUser(false);
};
