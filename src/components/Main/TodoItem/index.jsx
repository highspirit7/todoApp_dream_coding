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
          id="todoItem"
          checked={done}
          className={style.checkbox}
          onChange={(e) => {
            checkTodoItem(e.target.checked);
          }}
        />
        <label
          htmlFor="todoItem"
          className={done ? style["completed-item"] : style["uncompleted-item"]}
        >
          {name}
        </label>
      </div>
      <button className={style.button}>
        <BsTrash color="white" />
      </button>
    </li>
  );
};

export default TodoItem;
