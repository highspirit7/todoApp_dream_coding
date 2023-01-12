import React from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import style from "./ThemeMode.module.css";
import { useThemeContext } from "context/ThemeContext";

const ThemeMode = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className={style.button}>
      {theme === "dark" ? (
        <BsSun className={style["icon-sun"]} onClick={() => toggleTheme()} />
      ) : (
        <BsMoonFill
          className={style["icon-moon"]}
          onClick={() => toggleTheme()}
        />
      )}
    </button>
  );
};

export default ThemeMode;
