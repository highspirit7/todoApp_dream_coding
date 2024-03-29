import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getItemAndParse } from "utils/localStorage";
import style from "./Bottom.module.css";
import { useThemeContext } from "context/ThemeContext";

const Bottom = (props) => {
  const { setTodos, setTabStatus } = props;
  const [inputValue, setInputValue] = useState("");
  const localStorage = window.localStorage;
  const { theme } = useThemeContext();

  const handleCreateItem = () => {
    try {
      const prevTodos = getItemAndParse("todos");

      const newItem = { name: inputValue, completed: false };

      let newTodos;

      if (inputValue.trim().length === 0) {
        alert("Input a name of todo, please!");
        return;
      }

      if (prevTodos && prevTodos.length > 0) {
        prevTodos.push({ ...newItem, id: uuidv4() });
        newTodos = JSON.stringify(prevTodos);
      } else {
        newTodos = JSON.stringify([{ ...newItem, id: uuidv4() }]);
      }

      localStorage.setItem("todos", newTodos);
      setTabStatus("all");
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
        <button className={style["add-button"]} onClick={handleCreateItem}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Bottom;
