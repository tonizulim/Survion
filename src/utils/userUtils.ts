import type { HandleLoginProps } from "../types/HandleLoginProps";
import { login, register } from "../services/userService";
import type { HandleRegisterProps } from "../types/HandleRegisterProps";
import type { User } from "../types/User";

export const handleLogin = async ({
  e,
  credentials,
  setLoading,
  navigate,
  setError,
  setUser,
}: HandleLoginProps) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await login({ credentials });

    if (res.status === 200) {
      const user = res.data;
      if (user.isApproved && user.isEmailVerified) {
        navigate("/");
      } else {
        setUser({
          email: credentials.email,
          isApproved: user.isApproved,
          isEmailVerified: user.isEmailVerified,
          isAdmin: user.isAdmin,
        });
      }
    } else {
      setError(res.data);
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};

export const handleRegister = async ({
  e,
  credentials,
  setLoading,
  setError,
  setSuccessRegistration,
}: HandleRegisterProps) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await register({ credentials });

    if (res.status === 200) {
      setSuccessRegistration(true);
    } else {
      setError(res.data);
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};
