import React from "react";
import { BsTrash } from "react-icons/bs";
import { useThemeContext } from "context/ThemeContext";
import style from "./TodoItem.module.css";

const TodoItem = (props) => {
  const { item, onCheck, onDelete } = props;
  const { name, completed, id } = item;
  const { theme } = useThemeContext();

  const labelClassNames = `${
    completed
      ? theme === "dark"
        ? style["completed-item__dark-theme"]
        : style["completed-item__light-theme"]
      : theme === "dark"
      ? style["uncompleted-item__dark-theme"]
      : style["uncompleted-item__light-theme"]
  }`;

  const handleCheck = (checked) => {
    onCheck({ ...item, completed: checked });
  };

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <li className={style["list-item"]}>
      <div>
        <input
          type="checkbox"
          id={id}
          checked={completed}
          className={style.checkbox}
          onChange={(e) => {
            handleCheck(e.target.checked);
          }}
        />
        <label htmlFor={id} className={labelClassNames}>
          {name}
        </label>
      </div>
      <button className={style.button} onClick={handleDelete}>
        <BsTrash color="white" />
      </button>
    </li>
  );
};

export default TodoItem;
