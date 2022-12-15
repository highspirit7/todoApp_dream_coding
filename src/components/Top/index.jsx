import React from "react";
import StatusTabs from "./StatusTabs";
import ThemeMode from "./ThemeMode";
import style from "./Top.module.css";

const Top = () => {
  return (
    <header className={style.wrapper}>
      <ThemeMode />
      <StatusTabs />
    </header>
  );
};

export default Top;
