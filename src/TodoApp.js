import React, { useEffect, useState } from "react";
import { getItemAndParse } from "utils/localStorage";
import style from "./TodoApp.module.css";
import Top from "components/Top";
import Main from "components/Main";
import Bottom from "components/Bottom";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const todoItems = getItemAndParse("todos");

  useEffect(() => {
    setTodos(todoItems);
  }, []);

  return (
    <div className={style["todo-app"]}>
      <Top status={status} setStatus={setStatus} setTodos={setTodos} />
      <Main todos={todos} setTodos={setTodos} />
      <Bottom setTodos={setTodos} />
    </div>
  );
}

export default TodoApp;
