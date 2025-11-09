import type { HandleLoginProps } from "../types/HandleLoginProps";
import { login } from "../services/userService";

export const handleLogin = async ({
  e,
  credentials,
  setLoading,
  navigate,
  setError,
}: HandleLoginProps) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await login({ credentials });

    if (res.status === 200) {
      navigate("/");
    } else {
      setError(res.data);
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};
