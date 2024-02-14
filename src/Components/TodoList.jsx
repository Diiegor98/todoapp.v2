import './todolist.css'

function TodoList({ children }) {
    return (
      <ul className="TodoList">
        {children}
      </ul>
    );
  }
  
  export default TodoList;
  