import React from "react";
import { getItemAndParse } from "utils/localStorage";
import { filteredTodos } from "utils/todos";
import StatusTabs from "./StatusTabs";
import ThemeMode from "./ThemeMode";
import style from "./Top.module.css";

const Top = (props) => {
  const { currentTab, setStatus, setTodos, theme, setTheme } = props;
  const todosInLS = getItemAndParse("todos");

  const handleClickTab = (status) => {
    setStatus(status);
    setTodos(filteredTodos(status, todosInLS));
  };

  return (
    <header
      className={`${style.wrapper} ${
        theme === "dark" ? style["dark-theme"] : style["light-theme"]
      }`}
    >
      <ThemeMode theme={theme} setTheme={setTheme} />
      <StatusTabs
        currentTab={currentTab}
        onClickTab={handleClickTab}
        theme={theme}
      />
    </header>
  );
};

export default Top;
