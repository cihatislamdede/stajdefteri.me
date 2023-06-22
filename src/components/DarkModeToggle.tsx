import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setDarkMode(savedTheme === "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <button
        className="flex items-center justify-center w-10 h-10 p-3 rounded-full"
        onClick={() => {
          if (darkMode) {
            document.documentElement.classList.replace("dark", "light");
            localStorage.setItem("theme", "light");
          } else {
            document.documentElement.classList.replace("light", "dark");
            localStorage.setItem("theme", "dark");
          }
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? (
          <HiSun className="w-4 h-4 text-yellow-500" />
        ) : (
          <HiMoon className="w-4 h-4 text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
