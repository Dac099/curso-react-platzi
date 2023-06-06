import "./Modal.css";
import { createPortal } from "react-dom";

function Modal(props){
  return createPortal(
    <article className="modal">
      {props.modalContent}
    </article>,
    document.getElementById('modal')
  );
}

export { Modal };