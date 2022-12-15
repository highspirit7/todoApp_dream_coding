import React from "react";
import style from "./StatusTabs.module.css";

const StatusTabs = () => {
  return (
    <nav>
      <ul className={`${style["no-bullets"]} ${style.wrapper}`}>
        <li className={style.tab}>All</li>
        <li className={style.tab}>Active</li>
        <li className={style.tab}>Completed</li>
      </ul>
    </nav>
  );
};

export default StatusTabs;
