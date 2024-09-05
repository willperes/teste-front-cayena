import { useForm } from "react-hook-form";
import {
  ILogInFormModel,
  LogInFormModel,
} from "../../models/log-in-form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthenticateUserUseCase, ISubmitLogInDTO } from "@/domain";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HttpError } from "@/infra";
import { toast } from "react-toastify";

type Props = {
  authenticateUserUseCase: AuthenticateUserUseCase;
};

export function useLoginPageForm({ authenticateUserUseCase }: Props) {
  const router = useRouter();

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { control, handleSubmit } = useForm<ILogInFormModel>({
    mode: "onChange",
    resolver: zodResolver(LogInFormModel),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function handleSubmitForm(formValues: ILogInFormModel) {
    const data: Pick<ISubmitLogInDTO, "username" | "password"> = {
      username: formValues.username,
      password: formValues.password,
    };

    try {
      setIsAuthenticating(true);

      const result = await authenticateUserUseCase.execute(data);
      if (result) {
        router.replace("/");
      }
    } catch (error) {
      if (error instanceof HttpError) {
        const isBadCredentialsError =
          error.data?.error_description === "Bad credentials";
        if (isBadCredentialsError) {
          toast("Incorrect username or password", { type: "error" });
          return;
        }
      }

      toast("An error occurred while trying to sign in, please try again.", {
        type: "error",
      });
    } finally {
      setIsAuthenticating(false);
    }
  }

  return {
    control,
    isAuthenticating,
    onFormSubmit: handleSubmit(handleSubmitForm),
  };
}
