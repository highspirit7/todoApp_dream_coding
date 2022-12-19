import React, { useState } from "react";
import { getItemAndParse } from "utils/localStorage";
import style from "./Bottom.module.css";

const Bottom = () => {
  const [inputValue, setInputValue] = useState("");
  const localStorage = window.localStorage;

  const addItem = () => {
    try {
      const prevTodos = getItemAndParse("todos");

      const newItem = { name: inputValue, done: false };

      let newTodos;

      if (prevTodos) {
        prevTodos.push(newItem);
        newTodos = JSON.stringify(prevTodos);
      } else {
        newTodos = JSON.stringify([newItem]);
      }

      localStorage.setItem("todos", newTodos);
    } catch (error) {
      console.error(error);
      alert("Failed to add a new todo item...");
    } finally {
      setInputValue("");
    }
  };

  return (
    <div className={style["bottom"]}>
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
