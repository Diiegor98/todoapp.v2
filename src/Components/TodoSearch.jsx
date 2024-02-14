import "./todosearch.css";


function TodoSearch({ searchValue, setSearchValue}) {

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
