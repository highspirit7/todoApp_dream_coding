import React from "react";
import TodoItem from "./TodoItem";
import style from "./Main.module.css";

const Main = () => {
  return (
    <main className={style["main-wrapper"]}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </main>
  );
};

export default Main;
