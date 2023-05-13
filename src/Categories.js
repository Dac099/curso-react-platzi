import "./Categories.css";

function Categories(props){
  return (
    <article className="categories_container">
      <p>Categorias</p>

      <nav>
        <ul>
          <li>Todos</li>
          {props.categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </nav>
    </article>
  );
}

export {Categories};