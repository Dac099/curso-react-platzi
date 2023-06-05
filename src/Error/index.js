import { VscError as ErrorIcon } from "react-icons/vsc";
import "./Error.css";

function Error({msg}){
  return (
    <article className="error--container">
      <p className="error--icon">
        <ErrorIcon/>
      </p>
      <h2 className="error--msg">{msg}</h2>
    </article>
  );
}

export {Error};