import { login, register } from "../services";
import type { HandleRegisterProps, HandleLoginProps } from "../types";

export const handleLogin = async ({
  credentials,
  setLoadingUser,
  navigate,
  setUser,
}: HandleLoginProps) => {
  setLoadingUser(true);

  try {
    const res = await login({ credentials });

    if (res.status === 200) {
      //const user = res.data;

      setUser({
        email: credentials.email,
        // isApproved: user.isApproved,
        // isEmailVerified: user.isEmailVerified,
        // isAdmin: user.isAdmin,
        isApproved: true,
        isEmailVerified: true,
        isAdmin: false,
      });

      // if (user.isApproved && user.isEmailVerified) {
      //   navigate("/dashboard");
      // }
    } else {
    }
  } catch (err) {
    console.error(err);
  }

  setLoadingUser(false);
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
      setError(res.data.detail);
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};
