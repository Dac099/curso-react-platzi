import "./ColorsOptions.css";
import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

function ColorsOptions(){
  const {
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <article className="card--options">
      <button
        onClick={() => setOpenModal(false)}
      >
        Close
      </button>
    </article>
  );
}

export { ColorsOptions };