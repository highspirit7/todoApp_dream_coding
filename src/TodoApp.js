import style from "./TodoApp.module.css";
import Top from "components/Top";
import Main from "components/Main";

function TodoApp() {
  return (
    <div className={style["todo-app"]}>
      <Top />
      <Main />
    </div>
  );
}

export default TodoApp;
