import styles from "./login-page-form.module.scss";

import { Button, FormTextInput } from "@/components";
import { useLoginPageForm } from "./use-login-page-form";
import { AuthenticateUserUseCase, AuthenticateUserUseCaseImpl } from "@/domain";

type Props = {
  authenticateUserUseCase?: AuthenticateUserUseCase;
};

export function LoginPageForm({
  authenticateUserUseCase = new AuthenticateUserUseCaseImpl(),
}: Props) {
  const { control, onFormSubmit } = useLoginPageForm({
    authenticateUserUseCase,
  });
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <FormTextInput
        control={control}
        name={"username"}
        label={"Username"}
        placeholder={"Insert your username"}
        required
      />

      <FormTextInput
        control={control}
        name={"password"}
        label={"Password"}
        placeholder={"Insert your password"}
        required
      />

      <div className={styles["form__button-box"]}>
        <Button title={"Submit"} />
      </div>
    </form>
  );
}
