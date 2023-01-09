import React, { useEffect, useState } from "react";
import { getItemAndParse } from "utils/localStorage";
import style from "./TodoApp.module.css";
import Top from "components/Top";
import Main from "components/Main";
import Bottom from "components/Bottom";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [tabStatus, setTabStatus] = useState("all");
  const todoItems = getItemAndParse("todos");

  useEffect(() => {
    setTodos(todoItems);
  }, []);

  return (
    <div className={style["todo-app"]}>
      <Top status={tabStatus} setStatus={setTabStatus} setTodos={setTodos} />
      <Main todos={todos} setTodos={setTodos} tabStatus={tabStatus} />
      <Bottom setTodos={setTodos} />
    </div>
  );
}

export default TodoApp;
