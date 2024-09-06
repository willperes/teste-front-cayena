import { ThemeContext, ThemeService } from "@/providers";
import { useContext } from "react";

export function useTheme(): ThemeService {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }

  return context;
}
