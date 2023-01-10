import React from "react";
import style from "./StatusTabs.module.css";
import { getItemAndParse } from "utils/localStorage";
import { filteredTodos } from "utils/todos";

const StatusTabs = (props) => {
  const { status, setStatus, setTodos, theme } = props;
  const todosInLS = getItemAndParse("todos");

  const onClickTab = (status) => {
    setStatus(status);
    setTodos(filteredTodos(status, todosInLS));
  };

  const allTabClassNames = `${style.tab} ${
    status === "all" ? style.selected : ""
  } ${theme === "dark" ? style["dark-theme"] : style["light-theme"]}`;
  const activeTabClassNames = `${style.tab} ${
    status === "active" ? style.selected : ""
  } ${theme === "dark" ? style["dark-theme"] : style["light-theme"]}`;
  const completedTabClassNames = `${style.tab} ${
    status === "completed" ? style.selected : ""
  } ${theme === "dark" ? style["dark-theme"] : style["light-theme"]}`;

  return (
    <nav>
      <ul className={`${style["no-bullets"]} ${style.wrapper}`}>
        <li className={allTabClassNames} onClick={() => onClickTab("all")}>
          All
        </li>
        <li
          className={activeTabClassNames}
          onClick={() => onClickTab("active")}
        >
          Active
        </li>
        <li
          className={completedTabClassNames}
          onClick={() => onClickTab("completed")}
        >
          Completed
        </li>
      </ul>
    </nav>
  );
};

export default StatusTabs;
