import { useCallback, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = mode;
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.classList.toggle("light", mode === "light");
}

export function useTheme(initialMode: ThemeMode = "dark") {
  const [theme, setTheme] = useState<ThemeMode>(initialMode);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setLight = useCallback(() => setTheme("light"), []);
  const setDark = useCallback(() => setTheme("dark"), []);
  const toggleTheme = useCallback(() => setTheme((current) => (current === "dark" ? "light" : "dark")), []);

  return {
    theme,
    setTheme,
    setLight,
    setDark,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
}
