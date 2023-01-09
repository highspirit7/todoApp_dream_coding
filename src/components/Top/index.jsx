import React from "react";
import StatusTabs from "./StatusTabs";
import ThemeMode from "./ThemeMode";
import style from "./Top.module.css";

const Top = (props) => {
  const { status, setStatus, setTodos } = props;

  return (
    <header className={style.wrapper}>
      <ThemeMode />
      <StatusTabs status={status} setStatus={setStatus} setTodos={setTodos} />
    </header>
  );
};

export default Top;
