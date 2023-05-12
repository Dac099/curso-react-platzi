function CompletedTodos(props){
  return (
    <article>
      <section>
        {props.completed_todos.map(todo => (
          <div key={todo.title}>
            <p>{todo.title}</p>
            <p>{todo.category}</p>
          </div>
        ))}
      </section>

      <button type="button">Eliminar TODOs</button>
    </article>
  );
}

export {CompletedTodos};