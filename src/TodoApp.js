import React, { useEffect, useState } from "react";
import { getItemAndParse } from "utils/localStorage";
import style from "./TodoApp.module.css";
import Top from "components/Top";
import Main from "components/Main";
import Bottom from "components/Bottom";
import { ThemeContextProvider } from "context/ThemeContext";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");
  const todoItems = getItemAndParse("todos");

  useEffect(() => {
    setTodos(todoItems);
  }, []);

  return (
    <ThemeContextProvider>
      <div className={style["todo-app"]}>
        <Top
          currentTab={currentTab}
          setStatus={setCurrentTab}
          setTodos={setTodos}
        />
        <Main todos={todos} setTodos={setTodos} tabStatus={currentTab} />
        <Bottom setTodos={setTodos} setTabStatus={setCurrentTab} />
      </div>
    </ThemeContextProvider>
  );
}

export default TodoApp;
