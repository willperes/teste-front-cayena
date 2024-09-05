import styles from "./button.module.scss";

type Props = {
  title: string;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  title,
  variant = "primary",
  className,
  ...buttonProps
}: Props) {
  const buttonVariantClass = BUTTON_VARIANT_CLASS[variant];
  const buttonClasses = [styles.button, styles[buttonVariantClass], className];

  return (
    <button {...buttonProps} className={buttonClasses.join(" ")}>
      {title}
    </button>
  );
}

type ButtonVariant = "primary";

const BUTTON_VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "button--primary",
};
