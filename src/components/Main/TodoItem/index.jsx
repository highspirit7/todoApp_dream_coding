import React from "react";
import { BsTrash } from "react-icons/bs";
import { getItemAndParse } from "utils/localStorage";
import style from "./TodoItem.module.css";

const TodoItem = (props) => {
  const { item, setTodos, index } = props;
  const { name, done } = item;

  const checkTodoItem = (value) => {
    const todos = getItemAndParse("todos");
    const updatedItem = { name, done: value };

    todos[index] = updatedItem;

    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(todos);
  };

  return (
    <li className={style["list-item"]}>
      <div>
        <input
          type="checkbox"
          id="section1"
          checked={done}
          className={style.checkbox}
          onChange={(e) => {
            checkTodoItem(e.target.checked);
          }}
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
