import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem />
    </div>
  );
}

function TodoItem(){
  return(
    <li>
      <span>V</span>
      <p>Curso de React JS</p>
      <span>X</span>
    </li>
  );
}


export default App;