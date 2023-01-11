import React from "react";
import style from "./StatusTabs.module.css";

const StatusTabs = (props) => {
  const { status, onClickTab, theme } = props;

  const handleClick = (status) => {
    onClickTab(status);
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
        <li className={allTabClassNames} onClick={() => handleClick("all")}>
          All
        </li>
        <li
          className={activeTabClassNames}
          onClick={() => handleClick("active")}
        >
          Active
        </li>
        <li
          className={completedTabClassNames}
          onClick={() => handleClick("completed")}
        >
          Completed
        </li>
      </ul>
    </nav>
  );
};

export default StatusTabs;
