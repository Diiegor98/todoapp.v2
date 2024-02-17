import { useContext } from "react";
import "./todosearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

  const { searchValue, setSearchValue} = useContext(TodoContext)

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar tarea"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  );
}

export default TodoSearch;
