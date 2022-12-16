import React from "react";
import style from "./TodoItem.module.css";
import { CiTrash } from "react-icons/ci";

const TodoItem = () => {
  return (
    <li className={style["list-item"]}>
      <div>
        <input
          type="checkbox"
          id="section1"
          checked={true}
          className={style.checkbox}
        ></input>
        <label for="section1">리액트 드림 코딩 section 1</label>
      </div>
      <button className={style.button}>
        <CiTrash className={style.icon} />
      </button>
    </li>
  );
};

export default TodoItem;
