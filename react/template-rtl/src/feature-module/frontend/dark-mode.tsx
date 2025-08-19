import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Handle toggle
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "null");
    } else {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    }
    setIsDarkMode(!isDarkMode);
  };

  // Initialize from localStorage
  const initializeDarkMode = useCallback(() => {
    const darkMode = localStorage.getItem("dark-mode");
    const enabled = darkMode === "enabled";
    setIsDarkMode(enabled);
    if (enabled) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, []);

  // Optional menu update function
  const updateMenu = useCallback(() => {
    console.log("Update menu on resize");
    // Add your menu adjustment logic here
  }, []);

  // On mount
  useEffect(() => {
    initializeDarkMode();
    updateMenu();
    window.addEventListener("resize", updateMenu);

    return () => {
      window.removeEventListener("resize", updateMenu);
    };
  }, [initializeDarkMode, updateMenu]);

  return (
    <Link
      to="#"
      id="dark-mode-toggle"
      onClick={toggleDarkMode}
      className={`theme-toggle activate ${isDarkMode ? "active" : ""}`}
    >
      <i className={`isax ${isDarkMode ? "isax-moon" : "isax-sun-1"}`}></i>
    </Link>
  );
};

export default DarkModeToggle;
