import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import TodosLoading from "../TodosLoading";
import TodosError from "../TodosError";
import TodosEmpty from "../TodosEmpty";
import CreateTodoButton from "../CreateTodoButton";
import Modal from "../Modal";
import TodoForm from "../TodoForm";

//Provider
import { TodoContext } from "../TodoContext";
import { useContext } from "react";

const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && !error && searchedTodos.length === 0 && <TodosEmpty />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && <Modal><TodoForm /></Modal>}
    </div>
  );
};

export default AppUI;
