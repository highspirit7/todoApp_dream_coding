import React, { useEffect, useState } from "react";
import { getItemAndParse } from "utils/localStorage";
import style from "./TodoApp.module.css";
import Top from "components/Top";
import Main from "components/Main";
import Bottom from "components/Bottom";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");
  const [theme, setTheme] = useState("dark");
  const todoItems = getItemAndParse("todos");

  useEffect(() => {
    setTodos(todoItems);
  }, []);

  return (
    <div className={style["todo-app"]}>
      <Top
        currentTab={currentTab}
        setStatus={setCurrentTab}
        setTodos={setTodos}
        theme={theme}
        setTheme={setTheme}
      />
      <Main
        todos={todos}
        setTodos={setTodos}
        tabStatus={currentTab}
        theme={theme}
      />
      <Bottom setTodos={setTodos} setTabStatus={setCurrentTab} theme={theme} />
    </div>
  );
}

export default TodoApp;
