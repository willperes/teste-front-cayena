import { useForm } from "react-hook-form";
import {
  ILogInFormModel,
  LogInFormModel,
} from "../../models/log-in-form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthenticateUserUseCase, ISubmitLogInDTO } from "@/domain";
import { useRouter } from "next/navigation";

type Props = {
  authenticateUserUseCase: AuthenticateUserUseCase;
};

export function useLoginPageForm({ authenticateUserUseCase }: Props) {
  const router = useRouter();

  const { control, handleSubmit } = useForm<ILogInFormModel>({
    mode: "onChange",
    resolver: zodResolver(LogInFormModel),
  });

  async function handleSubmitForm(formValues: ILogInFormModel) {
    const data: Pick<ISubmitLogInDTO, "username" | "password"> = {
      username: formValues.username,
      password: formValues.password,
    };

    try {
      const result = await authenticateUserUseCase.execute(data);
      if (result) {
        router.replace("/");
      }
    } catch {
      // TODO: handle error (show a toast)
    }
  }

  return {
    control,
    onFormSubmit: handleSubmit(handleSubmitForm),
  };
}
