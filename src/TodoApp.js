import style from "./App.module.css";
import Top from "components/Top";

function TodoApp() {
  return (
    <div className={style["todo-app"]}>
      <Top />
    </div>
  );
}

export default TodoApp;
