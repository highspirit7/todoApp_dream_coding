import React from "react";
import style from "./StatusTabs.module.css";
import { getItemAndParse } from "utils/localStorage";

const StatusTabs = (props) => {
  const { status, setStatus, setTodos } = props;
  const todosInLS = getItemAndParse("todos");

  const filteredTodos = (status) => {
    switch (status) {
      case "all":
        return todosInLS;
      case "active":
        return todosInLS.filter((item) => !item.done);
      case "completed":
        return todosInLS.filter((item) => item.done);
      default:
        return todosInLS;
    }
  };

  const onClickTab = (status) => {
    setStatus(status);
    setTodos(filteredTodos(status));
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
