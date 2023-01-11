import React from "react";
import TodoItem from "./TodoItem";
import style from "./Main.module.css";

const Main = (props) => {
  const { todos, setTodos, tabStatus, theme } = props;

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
              setTodos={setTodos}
              todos={todos}
              tabStatus={tabStatus}
              theme={theme}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Main;
