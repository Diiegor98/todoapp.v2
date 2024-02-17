import { IconContext } from "react-icons";
import { IoCreateOutline } from "react-icons/io5";
import './TodosEmpty.css'

const TodosEmpty = () => {
  return (
    <div className="empty-container">
      <IconContext.Provider
        value={{
          className: `empty-icon`,
        }}
      >
        <IoCreateOutline />
        <p className="empty-text">Crea una nueva para comenzar</p>
      </IconContext.Provider>
    </div>
  );
};

export default TodosEmpty;
