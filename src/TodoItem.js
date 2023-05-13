import './TodoItem.css';

function TodoItem({title, completed, date}){
  return (
    <li>
      <article className='todo_card'>
        <p>{title}</p>
        <p>{date}</p>
        <p>&#10003;</p>
      </article>
    </li>
  );
}

export {TodoItem};