import React from "react";
import { filteredTodos } from "utils/todos";
import { getItemAndParse } from "utils/localStorage";
import TodoItem from "./TodoItem";
import style from "./Main.module.css";

const Main = (props) => {
  const { todos, setTodos, tabStatus, theme } = props;
  const todosInLS = getItemAndParse("todos");

  const handleCheckTodoItem = (checkedItem) => {
    localStorage.setItem(
      "todos",
      JSON.stringify(
        todosInLS.map((item) =>
          item.id === checkedItem.id ? checkedItem : item,
        ),
      ),
    );

    const updatedTodos = todos.map((item) =>
      item.id === checkedItem.id ? checkedItem : item,
    );
    setTodos(filteredTodos(tabStatus, updatedTodos));
  };

  const handleDeleteTodoItem = (deletedItem) => {
    const updatedTodos = todos.filter((item) => item.id !== deletedItem.id);
    const updatedTodosInLS = todosInLS.filter(
      (item) => item.id !== deletedItem.id,
    );

    localStorage.setItem("todos", JSON.stringify(updatedTodosInLS));
    setTodos(updatedTodos);
  };

  return (
    <main
      className={`${style["main-wrapper"]} ${
        theme === "dark" ? style["dark-theme"] : style["light-theme"]
      }`}
    >
      {todos && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((item) => (
            <TodoItem
              item={item}
              key={item.id}
              onCheck={handleCheckTodoItem}
              onDelete={handleDeleteTodoItem}
              theme={theme}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Main;
