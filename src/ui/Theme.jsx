import { useState, useEffect } from "react";
import { BsBrightnessHighFill, BsMoonFill } from "react-icons/bs";

const Theme = () => {
  const [theme, setTheme] = useState("null");
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIcon(!icon)
  };
  return (
    <button className="" onClick={handleThemeSwitch}>
          {icon ? (
            <BsBrightnessHighFill className="w-4" />
          ) : (
            <BsMoonFill className="w-4" />
          )}
    </button>
  );
};

export default Theme;
