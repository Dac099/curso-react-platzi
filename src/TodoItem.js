function TodoItem({title, completed}){
  return (
    <li>
      <span>V</span>
      <p>{title}</p>
      <span>x</span>
    </li>
  );
}

export {TodoItem};