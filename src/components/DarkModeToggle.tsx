import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center mt-1">
      <button
        className="flex items-center justify-center w-10 h-10 p-3 rounded-full bg-gray-200 dark:bg-gray-800"
        onClick={() => setDarkMode(!darkMode)}
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
