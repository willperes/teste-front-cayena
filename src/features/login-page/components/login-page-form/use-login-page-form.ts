import { useForm } from "react-hook-form";
import {
  ILogInFormModel,
  LogInFormModel,
} from "../../models/log-in-form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthenticateUserUseCase, ISubmitLogInDTO } from "@/domain";

type Props = {
  authenticateUserUseCase: AuthenticateUserUseCase;
};

export function useLoginPageForm({ authenticateUserUseCase }: Props) {
  const { control, handleSubmit } = useForm<ILogInFormModel>({
    mode: "onChange",
    resolver: zodResolver(LogInFormModel),
  });

  async function handleSubmitForm(formValues: ILogInFormModel) {
    const data: Pick<ISubmitLogInDTO, "username" | "password"> = {
      username: formValues.username,
      password: formValues.password,
    };
    const result = await authenticateUserUseCase.execute(data);
    console.log("auth result", result);
  }

  return {
    control,
    onFormSubmit: handleSubmit(handleSubmitForm),
  };
}
