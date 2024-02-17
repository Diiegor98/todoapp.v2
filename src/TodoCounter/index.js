import { useContext } from "react";
import "./todocounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {

  const {completedTodos, totalTodos} = useContext(TodoContext)

  return (
    <h1 className="TodoCounter">
      Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
    </h1>
  );
}

export default TodoCounter;
