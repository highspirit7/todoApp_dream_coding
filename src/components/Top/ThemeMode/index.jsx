import React from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import style from "./ThemeMode.module.css";

const ThemeMode = (props) => {
  const { theme, setTheme } = props;

  const onClickIcon = (theme) => {
    setTheme(theme);
  };

  return (
    <button className={style.button}>
      {theme === "dark" ? (
        <BsSun
          className={style["icon-sun"]}
          onClick={() => onClickIcon("light")}
        />
      ) : (
        <BsMoonFill
          className={style["icon-moon"]}
          onClick={() => onClickIcon("dark")}
        />
      )}
    </button>
  );
};

export default ThemeMode;
