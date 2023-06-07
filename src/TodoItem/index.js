import './TodoItem.css';
import { MdOutlineDoneOutline as Done } from "react-icons/md";
import { useContext } from 'react';
import { ColorsContext } from '../Context/ColorsContext';

function TodoItem({title, date, completeTodo, color}){
  const { appColors } = useContext(ColorsContext);

  return (
    <li>
      <article 
        className='todo_card'
        style={{
          borderColor: appColors.border_color
        }}
      >
        <p
          style={{
            color: appColors.text_color,
            backgroundColor: color
          }}
        >
          {title}
        </p>
        <p
          style={{
            backgroundColor: appColors.bg_color,
            color: appColors.text_color
          }}
        >
          {date}
        </p>
        <p
          style={{
            backgroundColor: appColors.complete_color,
            color: appColors.text_color
          }}
        >
          <Done
            onClick={() => completeTodo(title)} 
          />
        </p>
      </article>
    </li>
  );
}

export {TodoItem};