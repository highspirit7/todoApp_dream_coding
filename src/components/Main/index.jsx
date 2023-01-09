import React from "react";
import TodoItem from "./TodoItem";
import style from "./Main.module.css";
import { tab } from "@testing-library/user-event/dist/tab";

const Main = (props) => {
  const { todos, setTodos, tabStatus } = props;

  return (
    <main className={style["main-wrapper"]}>
      {todos && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((item) => (
            <TodoItem
              item={item}
              key={`${item.name + item.id}`}
              setTodos={setTodos}
              todos={todos}
              tabStatus={tabStatus}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Main;
