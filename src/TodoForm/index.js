import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value) 
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Ingresa tu nueva tarea</label>
      <textarea required placeholder="Nueva tarea" value={newTodoValue} onChange={onChange}/>
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
