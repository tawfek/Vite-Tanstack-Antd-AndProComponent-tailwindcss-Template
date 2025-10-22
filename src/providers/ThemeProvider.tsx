import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";

import type { ThemeName, ThemeMode } from "../types/theme";

interface ThemeContextProps {
  themeName: ThemeName;
  mode: ThemeMode;
  isDark: boolean;
  setTheme: (name: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_NAME_KEY = "app-theme-name";
const THEME_MODE_KEY = "app-theme-mode";

const getSystemTheme = (): boolean => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getInitialTheme = (): {
  name: ThemeName;
  mode: ThemeMode;
  isDark: boolean;
} => {
  const storedName =
    (localStorage.getItem(THEME_NAME_KEY) as ThemeName) || "falcon";
  const storedMode =
    (localStorage.getItem(THEME_MODE_KEY) as ThemeMode) || "system";

  const isDark =
    storedMode === "system" ? getSystemTheme() : storedMode === "dark";

  return { name: storedName, mode: storedMode, isDark };
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const initial = getInitialTheme();
  const [themeName, setThemeName] = useState<ThemeName>(initial.name);
  const [mode, setModeState] = useState<ThemeMode>(initial.mode);
  const [isDark, setIsDark] = useState<boolean>(initial.isDark);

  const setTheme = (name: ThemeName) => {
    setThemeName(name);
    localStorage.setItem(THEME_NAME_KEY, name);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem(THEME_MODE_KEY, newMode);

    if (newMode === "system") {
      setIsDark(getSystemTheme());
    } else {
      setIsDark(newMode === "dark");
    }
  };

  const toggleMode = () => {
    const newMode: ThemeMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  // Apply dark class to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    // Update data-theme attribute for CSS targeting
    document.documentElement.setAttribute("data-theme", themeName);
  }, [isDark, themeName]);

  // Listen for system theme changes
  useEffect(() => {
    if (mode !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{ themeName, mode, isDark, setTheme, setMode, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
