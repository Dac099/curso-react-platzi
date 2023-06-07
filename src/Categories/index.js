import "./Categories.css";
import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { ColorsContext } from "../Context/ColorsContext";

function Categories(){
  const {
    categorySelected,
    setCategorySelected,
    todos,
  } = useContext(TodoContext);

  const { appColors } = useContext(ColorsContext);

  function setSelectedStyle(category){
    if(category === categorySelected){
      return 'selected';
    }
  }

  const categoryStyle = {
    backgroundColor: appColors.btns_color,
    borderColor: appColors.border_color,
    color: appColors.text_color,
  };

  return (
    <article className="categories_container">
      <p
        style={{
          color: appColors.text_color
        }}
      >
        Categorias
      </p>

      <nav>
        <ul>

          <li
            onClick={() => setCategorySelected('all')} 
            className={setSelectedStyle('all')} 
            style={categoryStyle}
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
                style={categoryStyle}          
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