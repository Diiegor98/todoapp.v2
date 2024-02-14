import './todocounter.css';

function TodoCounter({ total, completed }) {
  return <h1 className='TodoCounter'>Completaste <span>{completed}</span> de <span>{total}</span> tareas</h1>;
}

export default TodoCounter;
