import './TodoItem.css';
import { MdOutlineDoneOutline as Done } from "react-icons/md";

function TodoItem({title, date, completeTodo}){

  return (
    <li>
      <article className='todo_card'>
        <p>{title}</p>
        <p>{date}</p>
        <p>
          <Done
            onClick={() => completeTodo(title)} 
          />
        </p>
      </article>
    </li>
  );
}

export {TodoItem};