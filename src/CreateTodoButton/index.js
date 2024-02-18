import "./createtodobutton.css";
import { IoAddCircle } from "react-icons/io5";
import { IconContext } from "react-icons";

function CreateTodoButton({ setOpenModal }) {
  return (
    <IconContext.Provider value={{ className: "CreateTodoButton" }}>
      <IoAddCircle
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      />
    </IconContext.Provider>
  );
}

export default CreateTodoButton;
