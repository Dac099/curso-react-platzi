import './TodoItem.css';

function TodoItem({title, completed, date, setTodos, todos}){
  
  function completeTodo(todo_title){
    const todos_copy = [...todos];
    const item_target = todos_copy.find(todo => todo.title.toLowerCase() === todo_title.toLowerCase());
    const item_index = todos_copy.findIndex(todo => todo.title === todo_title);

    todos_copy[item_index] = {
      ...item_target,
      completed: true,
    };

    setTodos(todos_copy);
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