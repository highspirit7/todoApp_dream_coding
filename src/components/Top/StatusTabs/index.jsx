import React from "react";
import style from "./StatusTabs.module.css";

const StatusTabs = (props) => {
  const statuses = ["all", "active", "completed"];
  const { currentTab, onClickTab, theme } = props;

  const handleClick = (status) => {
    onClickTab(status);
  };

  const classNames = statuses.map(
    (status) =>
      `${style.tab} ${currentTab === status ? style.selected : ""} ${
        theme === "dark" ? style["dark-theme"] : style["light-theme"]
      }`,
  );

  return (
    <nav>
      <ul className={`${style["no-bullets"]} ${style.wrapper}`}>
        {statuses.map((status, i) => (
          <li className={classNames[i]} onClick={() => handleClick(status)}>
            {status}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StatusTabs;
