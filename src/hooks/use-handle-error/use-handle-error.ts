import { HttpError } from "@/infra";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "react-toastify";

type HandleErrorArgs = {
  errorMessage: string;
};

export function useHandleError() {
  const router = useRouter();

  const handleError = useCallback(
    (error: any, { errorMessage }: HandleErrorArgs) => {
      let shouldRedirect = false;
      if (error instanceof HttpError) {
        shouldRedirect = error.statusCode === 401;
      } else {
        shouldRedirect = error?.response?.status === 401;
      }

      if (shouldRedirect) {
        toast("Your session has expired, please sign in again.", {
          type: "error",
        });
        router.replace("/login");
        return;
      }

      if (errorMessage) {
        toast(errorMessage, { type: "error" });
      }
    },
    []
  );

  return {
    handleError,
  };
}
