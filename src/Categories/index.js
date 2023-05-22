import "./Categories.css";

function Categories(props){

  function setSelectedStyle(category){
    if(category === props.categorySelected){
      return 'selected';
    }
  }

  return (
    <article className="categories_container">
      <p>Categorias</p>

      <nav>
        <ul>

          <li
            onClick={() => props.setCategorySelected('all')} 
            className={setSelectedStyle('all')} 
          >
            Todos
          </li>

          {props.todos
            .filter(todo => todo.completed === false)
            .map(todo => (
              <li 
                key={todo.category}
                onClick={() => props.setCategorySelected(todo.category)}
                className={setSelectedStyle(todo.category)}
              >
                {todo.category}
              </li>
            ))
          }

        </ul>
      </nav>
    </article>
  );
}

export {Categories};