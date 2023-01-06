import React from "react";
import TodoItem from "./TodoItem";
import style from "./Main.module.css";

const Main = ({ todos }) => {
  return (
    <main className={style["main-wrapper"]}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((item, index) => (
          <TodoItem item={item} key={`${item.name + index}`} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
