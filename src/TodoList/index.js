import './TodoList.css';

function TodoList (props) {
  let styleClass;

  if(props.todos.filter(todo => todo.completed === false).length > 0 && !props.isLoading){
    styleClass = 'list_container';
  }

  if(props.isLoading){
    styleClass = 'list_container__empty';
  }

  return <ul className={styleClass}>
    {props.children}
  </ul>;
}

export  {TodoList};