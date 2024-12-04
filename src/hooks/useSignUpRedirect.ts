import { useMsal } from "@azure/msal-react";
import { RedirectRequest } from "@azure/msal-browser";
import { useState } from "react";
import { redirectRequest } from "../authConfig";

interface UseSignUpRedirectResult {
  signUpRedirect: () => void;
  isLoading: boolean;
  error: Error | null;
}

export const useSignUpRedirect = (): UseSignUpRedirectResult => {
  const { instance } = useMsal();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const signUpRedirect = () => {
    setIsLoading(true);
    setError(null);

    instance
      .loginRedirect({
        ...redirectRequest,
        prompt: "create", // Forces user to sign up if supported by the policy
      })
      .catch((err) => {
        console.error("Sign-up redirect failed!", err);
        setError(err as Error);
      })
      .finally(() => setIsLoading(false));
  };

  return { signUpRedirect, isLoading, error };
};
