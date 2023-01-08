import React from "react";
import TodoItem from "./TodoItem";
import style from "./Main.module.css";

const Main = (props) => {
  const { todos, setTodos } = props;

  return (
    <main className={style["main-wrapper"]}>
      {todos && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((item, index) => (
            <TodoItem
              item={item}
              index={index}
              key={`${item.name + index}`}
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Main;
