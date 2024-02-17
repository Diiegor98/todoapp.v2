import "./createtodobutton.css";
import { MdAddToPhotos } from "react-icons/md";
import { IconContext } from "react-icons";

function CreateTodoButton({ setOpenModal }) {
  return (
    <IconContext.Provider value={{ className: "CreateTodoButton" }}>
      <MdAddToPhotos
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      />
    </IconContext.Provider>
  );
}

export default CreateTodoButton;
