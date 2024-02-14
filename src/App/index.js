import { useState } from "react";
//Componente App
import AppUI from "./AppUI";
//Custom Hook
import useLocalStorage from "./useLocalStorage";

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <AppUI
      loading={loading}
      error={error}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
    />
  );
}

export default App;
