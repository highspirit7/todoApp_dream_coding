import React, { useEffect, useState } from "react";
import { getItemAndParse } from "utils/localStorage";
import style from "./TodoApp.module.css";
import Top from "components/Top";
import Main from "components/Main";
import Bottom from "components/Bottom";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const todoItems = getItemAndParse("todos");

  useEffect(() => {
    setTodos(todoItems);
  }, [todoItems]);

  return (
    <div className={style["todo-app"]}>
      <Top />
      <Main todos={todos} />
      <Bottom setTodos={setTodos} />
    </div>
  );
}

export default TodoApp;
