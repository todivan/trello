import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { redirectRequest } from "../authConfig";

interface UseLoginPopupResult {
  login: () => Promise<void>;
  isLoading: boolean;
  error: Error | null;
}

export const useLogin = (): UseLoginPopupResult => {
  const { instance } = useMsal();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const login = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await instance.loginPopup(redirectRequest);
      console.log("Login successful!", response);
      // You can add additional logic here, such as setting user information in state or context.
    } catch (err) {
      console.error("Login failed!", err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};