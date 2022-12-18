import style from "./TodoApp.module.css";
import Top from "components/Top";
import Main from "components/Main";
import Bottom from "components/Bottom";

function TodoApp() {
  return (
    <div className={style["todo-app"]}>
      <Top />
      <Main />
      <Bottom />
    </div>
  );
}

export default TodoApp;
