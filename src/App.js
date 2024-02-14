import TodoCounter from "./Components/TodoCounter";
import TodoSearch from "./Components/TodoSearch";
import TodoList from "./Components/TodoList";
import TodoItem from "./Components/TodoItem";
import CreateTodoButton from "./Components/CreateTodoButton";
import { useState } from "react";

function App() {
  const tareas = [
    { text: "hola", completed: true },
    { text: "hola1", completed: false },
    { text: "hola2", completed: true },
    { text: "hola3", completed: false },
    { text: "hola4", completed: true },
  ];

  const [todos, setTodos] = useState(tareas);
  const [searchValue, setSearchValue] = useState("");

  const searchedTodos = todos.filter((todo) => {    
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
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

      <CreateTodoButton />
    </div>
  );
}

export default App;
