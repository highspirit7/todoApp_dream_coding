import React from "react";
import style from "./Bottom.module.css";

const index = () => {
  return (
    <div className={style["bottom"]}>
      <div className={style["button-input-wrapper"]}>
        <input placeholder="Add Todo" className={style["add-input"]} />
        <button className={style["add-button"]}>Add</button>
      </div>
    </div>
  );
};

export default index;
