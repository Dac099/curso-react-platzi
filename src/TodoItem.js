import './TodoItem.css';

function TodoItem({title, completed, date, setTodos,todos}){
  
  function completeTodo(todo_title){
      const itemTarget = todos.find(todo => todo.title === todo_title);
      const itemIndex = todos.find(todo => todo.title === todo_title);

      itemTarget.completed = true;

      prevTodos[itemIndex] = itemTarget;

      return prevTodos;
  }

  return (
    <li>
      <article className='todo_card'>
        <p>{title}</p>
        <p>{date}</p>
        <p
          onClick={() => completeTodo(title)}
        >
          &#10003;
        </p>
      </article>
    </li>
  );
}

export {TodoItem};