import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// === Provider: envuelve a toda la app ===
export function ThemeProvider({ children }) {

  // Estado del tema: "light" o "dark"
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  // Función para alternar entre light/dark
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Todo lo que otros componentes pueden usar
  const value = {
    theme,
    isDark: theme === "dark",
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

