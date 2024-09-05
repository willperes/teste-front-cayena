import { useForm } from "react-hook-form";
import {
  ILogInFormModel,
  LogInFormModel,
} from "../../models/log-in-form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthenticateUserUseCase, ISubmitLogInDTO } from "@/domain";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    } catch {
      // TODO: handle error (show a toast)
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
