import { LoadingSpinner } from "../loading-spinner/loading-spinner";
import styles from "./button.module.scss";

type Props = {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  title,
  loading,
  disabled,
  variant = "primary",
  className,
  ...buttonProps
}: Props) {
  const buttonVariantClass = BUTTON_VARIANT_CLASS[variant];
  const buttonClasses = [
    styles.button,
    loading || disabled
      ? styles["button--disabled"]
      : styles[buttonVariantClass],
    className,
  ];

  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className={buttonClasses.join(" ")}
    >
      {loading ? <LoadingSpinner /> : title}
    </button>
  );
}

type ButtonVariant = "primary";

const BUTTON_VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "button--primary",
};
