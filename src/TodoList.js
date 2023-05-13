import './TodoList.css';

function TodoList (props) {
  return <ul className='list_container'>
    {props.children}
  </ul>;
}

export  {TodoList};