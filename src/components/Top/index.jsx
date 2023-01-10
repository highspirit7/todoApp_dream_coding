import React from "react";
import StatusTabs from "./StatusTabs";
import ThemeMode from "./ThemeMode";
import style from "./Top.module.css";

const Top = (props) => {
  const { status, setStatus, setTodos, theme, setTheme } = props;

  return (
    <header
      className={`${style.wrapper} ${
        theme === "dark" ? style["dark-theme"] : style["light-theme"]
      }`}
    >
      <ThemeMode theme={theme} setTheme={setTheme} />
      <StatusTabs
        status={status}
        setStatus={setStatus}
        setTodos={setTodos}
        theme={theme}
      />
    </header>
  );
};

export default Top;
