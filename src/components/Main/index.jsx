import React from "react";
import TodoItem from "./TodoItem";

const Main = () => {
  return (
    <main>
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
