import React from "react";
import { BsTrash } from "react-icons/bs";
import { filteredTodos } from "utils/todos";
import { getItemAndParse } from "utils/localStorage";
import style from "./TodoItem.module.css";

const TodoItem = (props) => {
  const { item, setTodos, todos, tabStatus, theme } = props;
  const { name, done, id } = item;
  const todosInLS = getItemAndParse("todos");

  const labelClassNames = `${
    done
      ? theme === "dark"
        ? style["completed-item__dark-theme"]
        : style["completed-item__light-theme"]
      : theme === "dark"
      ? style["uncompleted-item__dark-theme"]
      : style["uncompleted-item__light-theme"]
  }`;

  const checkTodoItem = (value) => {
    const updatedItem = { name, done: value, id };

    localStorage.setItem(
      "todos",
      JSON.stringify(
        todosInLS.map((item) => (item.id === id ? updatedItem : item)),
      ),
    );

    const updatedTodos = todos.map((item) =>
      item.id === id ? updatedItem : item,
    );
    setTodos(filteredTodos(tabStatus, updatedTodos));
  };

  const deleteTodoItem = () => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    const updatedTodosInLS = todosInLS.filter((item) => item.id !== id);

    localStorage.setItem("todos", JSON.stringify(updatedTodosInLS));
    setTodos(updatedTodos);
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
        <label htmlFor="todoItem" className={labelClassNames}>
          {name}
        </label>
      </div>
      <button className={style.button} onClick={deleteTodoItem}>
        <BsTrash color="white" />
      </button>
    </li>
  );
};

export default TodoItem;
