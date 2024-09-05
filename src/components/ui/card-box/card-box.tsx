import styles from "./card-box.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function CardBox({
  children,
  className,
  ...props
}: React.PropsWithChildren<Props>) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
}
