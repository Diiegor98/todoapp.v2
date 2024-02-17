import "./todoitem.css";
import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <IconContext.Provider
        value={{ className: `Icon Icon-check ${completed && "Icon-check--active"}`}}
      >
        <FaCheck onClick={onComplete} />
      </IconContext.Provider>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <IconContext.Provider
        value={{ className: "Icon Icon-delete" }}
      >
        <MdDelete onClick={onDelete} />
      </IconContext.Provider>
    </li>
  );
}

export default TodoItem;
