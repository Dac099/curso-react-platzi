import "./Categories.css";

function Categories(props){

  function setSelectedStyle(index){
    if(index === props.indexCategory){
      return 'selected';
    }
  }

  return (
    <article className="categories_container">
      <p>Categorias</p>

      <nav>
        <ul>

          <li
            onClick={() => props.setIndexCategory(-1)} 
            className={setSelectedStyle(-1)} 
          >
            Todos
          </li>

          {props.categories.map((category, index) => (
            <li 
              key={category}
              onClick={() => props.setIndexCategory(index)}
              className={setSelectedStyle(index)}
            >
              {category}
            </li>
          ))}

        </ul>
      </nav>
    </article>
  );
}

export {Categories};