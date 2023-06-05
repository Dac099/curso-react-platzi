import "./Categories.css";
import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

function Categories(){
  const {
    categorySelected,
    setCategorySelected,
    todos,
  } = useContext(TodoContext);

  function setSelectedStyle(category){
    if(category === categorySelected){
      return 'selected';
    }
  }

  return (
    <article className="categories_container">
      <p>Categorias</p>

      <nav>
        <ul>

          <li
            onClick={() => setCategorySelected('all')} 
            className={setSelectedStyle('all')} 
          >
            Todas
          </li>

          {todos
            .filter(todo => todo.completed === false)
            .map(todo => (
              <li 
                key={todo.category}
                onClick={() => setCategorySelected(todo.category)}
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