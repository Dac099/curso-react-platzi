import './TodoList.css';

function TodoList (props) {
  return <ul className={(props.todos.filter(todo => todo.completed === false).length > 0) ? 'list_container' : 'list_container__empty'}>
    {props.todos.length < 1 
      ? <p className=''>No tienes tareas pendientes</p>
      : props.children
    }
  </ul>;
}

export  {TodoList};