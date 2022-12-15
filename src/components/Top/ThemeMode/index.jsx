import React from "react";
import { CiLight, CiDark } from "react-icons/ci";
import style from "./ThemeMode.module.css";

const ThemeMode = () => {
  return (
    <button className={style.button}>
      <CiLight className={style.icon} />
    </button>
  );
};

export default ThemeMode;
