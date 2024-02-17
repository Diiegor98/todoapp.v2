import { IconContext } from "react-icons";
import { MdError } from "react-icons/md";
import "./TodosError.css";

const TodosError = () => {
  return (
    <div className="error-container">
      <IconContext.Provider value={{ className: "error-icon" }}>
        <MdError />
        <p className="error-text">Oops! Ocurrió un error</p>
      </IconContext.Provider>
    </div>
  );
};

export default TodosError;
