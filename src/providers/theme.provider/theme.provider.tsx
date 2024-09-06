import { createContext, useEffect, useState } from "react";

export type ThemeService = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeService>({
  isDarkMode: false,
  toggleTheme: () => {},
});

const DARK_MODE_KEY = "dark-mode";

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    if (typeof window !== undefined) {
      const isNewThemeDark =
        document.documentElement.classList.toggle(DARK_MODE_KEY);
      localStorage.setItem(DARK_MODE_KEY, isNewThemeDark ? "dark" : "light");
      setIsDarkMode(isNewThemeDark);
    }
  }

  function handleSelectedTheme(theme: "light" | "dark") {
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark-mode");
    } else {
      window.document.documentElement.classList.remove("dark-mode");
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      const savedTheme =
        localStorage.getItem(DARK_MODE_KEY) === "dark" ? "dark" : "light";
      handleSelectedTheme(savedTheme);
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
