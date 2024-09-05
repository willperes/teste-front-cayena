import styles from "./login-page-form.module.scss";

import { Button, FormPasswordInput, FormTextInput } from "@/components";
import { useLoginPageForm } from "./use-login-page-form";
import { AuthenticateUserUseCase, AuthenticateUserUseCaseImpl } from "@/domain";

type Props = {
  authenticateUserUseCase?: AuthenticateUserUseCase;
};

export function LoginPageForm({
  authenticateUserUseCase = new AuthenticateUserUseCaseImpl(),
}: Props) {
  const { control, isAuthenticating, onFormSubmit } = useLoginPageForm({
    authenticateUserUseCase,
  });
  return (
    <form className={styles.form}>
      <FormTextInput
        control={control}
        name={"username"}
        label={"Username"}
        placeholder={"Insert your username"}
        type={"email"}
        required
      />

      <FormPasswordInput
        control={control}
        name={"password"}
        label={"Password"}
        placeholder={"Insert your password"}
        required
      />

      <div className={styles["form__button-box"]}>
        <Button
          title={"Sign In"}
          loading={isAuthenticating}
          onClick={onFormSubmit}
        />
      </div>
    </form>
  );
}
