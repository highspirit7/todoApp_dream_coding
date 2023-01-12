import React from "react";
import style from "./StatusTabs.module.css";
import { useThemeContext } from "context/ThemeContext";

const StatusTabs = (props) => {
  const statuses = ["all", "active", "completed"];
  const { currentTab, onClickTab } = props;
  const { theme } = useThemeContext();

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
