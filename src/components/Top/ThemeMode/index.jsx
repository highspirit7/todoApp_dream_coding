import React from "react";
import { BsSun } from "react-icons/bs";
import style from "./ThemeMode.module.css";

const ThemeMode = () => {
  return (
    <button className={style.button}>
      <BsSun className={style.icon} />
    </button>
  );
};

export default ThemeMode;
