import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { getItemAndParse } from "utils/localStorage";
import style from "./Main.module.css";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const todoItems = getItemAndParse("todos");

  // useEffect(() => {
  //   setTodos(todoItems);
  // }, [todoItems]);

  return (
    <main className={style["main-wrapper"]}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todoItems.map((item, index) => (
          <TodoItem item={item} key={`${item.name + index}`} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
