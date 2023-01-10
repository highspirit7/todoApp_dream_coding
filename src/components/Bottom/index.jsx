import React, { useState } from "react";
import { getItemAndParse } from "utils/localStorage";
import style from "./Bottom.module.css";

const Bottom = (props) => {
  const { setTodos, theme } = props;
  const [inputValue, setInputValue] = useState("");
  const localStorage = window.localStorage;

  const addItem = () => {
    try {
      const prevTodos = getItemAndParse("todos");

      const newItem = { name: inputValue, completed: false };

      let newTodos, id;

      if (inputValue.trim().length === 0) {
        alert("Input a name of todo, please!");
        return;
      }

      if (prevTodos && prevTodos.length > 0) {
        id = prevTodos[prevTodos.length - 1].id + 1;
        prevTodos.push({ ...newItem, id });
        newTodos = JSON.stringify(prevTodos);
      } else {
        newTodos = JSON.stringify([{ ...newItem, id: 1 }]);
      }

      localStorage.setItem("todos", newTodos);
      setTodos(JSON.parse(newTodos));
    } catch (error) {
      console.error(error);
      alert("Failed to add a new todo item...");
    } finally {
      setInputValue("");
    }
  };

  return (
    <div
      className={`${style["bottom"]} ${
        theme === "dark" ? style["dark-theme"] : style["light-theme"]
      }`}
    >
      <div className={style["button-input-wrapper"]}>
        <input
          placeholder="Add Todo"
          className={style["add-input"]}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={style["add-button"]} onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Bottom;
