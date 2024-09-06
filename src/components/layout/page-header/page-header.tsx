import { useBreakpoints, useTheme } from "@/hooks";
import styles from "./page-header.module.scss";
import { Icon } from "@/components";

type Props = {
  title?: string;
  TrailingComponent?: React.ReactElement;
};

export function PageHeader({ title, TrailingComponent }: Props) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { mdUp } = useBreakpoints();

  function ThemeToggleButton() {
    return (
      <button
        className={styles.text}
        onClick={toggleTheme}
        aria-roledescription={"Toggle current theme"}
      >
        <Icon name={isDarkMode ? "moonIcon" : "sunIcon"} size={20} />
      </button>
    );
  }

  return (
    <header className={styles.container}>
      <div className={styles["container__header-box"]}>
        {title ? <h1>{title}</h1> : <div />}
        {!mdUp ? <ThemeToggleButton /> : null}
      </div>

      {mdUp || TrailingComponent ? (
        <div className={styles["container__trailing-box"]}>
          {mdUp ? <ThemeToggleButton /> : null}
          {TrailingComponent ?? null}
        </div>
      ) : null}
    </header>
  );
}
