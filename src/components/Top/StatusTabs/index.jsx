import React from "react";
import style from "./StatusTabs.module.css";
import { getItemAndParse } from "utils/localStorage";
import { filteredTodos } from "utils/todos";

const StatusTabs = (props) => {
  const { status, setStatus, setTodos } = props;
  const todosInLS = getItemAndParse("todos");

  const onClickTab = (status) => {
    setStatus(status);
    setTodos(filteredTodos(status, todosInLS));
  };

  return (
    <nav>
      <ul className={`${style["no-bullets"]} ${style.wrapper}`}>
        <li
          className={`${style.tab} ${status === "all" ? style.selected : ""} `}
          onClick={() => onClickTab("all")}
        >
          All
        </li>
        <li
          className={`${style.tab} ${
            status === "active" ? style.selected : ""
          } `}
          onClick={() => onClickTab("active")}
        >
          Active
        </li>
        <li
          className={`${style.tab} ${
            status === "completed" ? style.selected : ""
          } `}
          onClick={() => onClickTab("completed")}
        >
          Completed
        </li>
      </ul>
    </nav>
  );
};

export default StatusTabs;
