import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/Utils";

export const ThemeToggle = ({ className }) => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const nextDark = theme !== "light";
    document.documentElement.classList.toggle("dark", nextDark);
    if (!theme) localStorage.setItem("theme", "dark");
    setDark(nextDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setDark(nextDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-6 w-6 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-primary",
        className
      )}
      aria-label={dark ? "Switch to light" : "Switch to dark"}
    >
      {dark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
    </button>
  );
};
