import React from "react";
import style from "./TodoItem.module.css";
import { BsTrash } from "react-icons/bs";

const TodoItem = (props) => {
  const { item } = props;
  const { name, done } = item;

  return (
    <li className={style["list-item"]}>
      <div>
        <input
          type="checkbox"
          id="section1"
          checked={done}
          className={style.checkbox}
        />
        <label htmlFor="section1">{name}</label>
      </div>
      <button className={style.button}>
        <BsTrash color="white" />
      </button>
    </li>
  );
};

export default TodoItem;
