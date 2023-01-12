import React from "react";
import { getItemAndParse } from "utils/localStorage";
import { filteredTodos } from "utils/todos";
import StatusTabs from "./StatusTabs";
import ThemeMode from "./ThemeMode";
import style from "./Top.module.css";
import { useThemeContext } from "context/ThemeContext";

const Top = (props) => {
  const { currentTab, setStatus, setTodos } = props;
  const todosInLS = getItemAndParse("todos");
  const { theme } = useThemeContext();
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
      <ThemeMode />
      <StatusTabs currentTab={currentTab} onClickTab={handleClickTab} />
    </header>
  );
};

export default Top;
