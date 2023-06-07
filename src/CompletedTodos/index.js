import './CompletedTodos.css';
import React, { useState, useContext } from 'react';
import { ColorsContext } from '../Context/ColorsContext';

function CompletedTodos(props){
  const [showCompletedTodos, setShowCompletedTodos] = useState(false)
  const { appColors } = useContext(ColorsContext);

  const btnStyle = {
    backgroundColor: appColors.btns_color,
    color: appColors.text_color,
    borderColor: appColors.border_color,
  };

  const completedContainerStyles = {
    borderColor: appColors.border_color
  };
  

  if(props.completed_todos.length < 1){
    return (
      <article className='container--completed--todos'>
        {showCompletedTodos && 
          <section 
            className='completed_container--empty'
            style={completedContainerStyles}
          >
            <p>No tienes TODOs completados</p>
          </section>
        }

        <button 
          type='button'
          className='completed_btn'
          onClick={() => setShowCompletedTodos(!showCompletedTodos)}
        >
          Completed TODOs
        </button>
      </article>
    );
  }

  return (
    <article>
      {showCompletedTodos && 
        <section 
          className='completed_container'
          style={completedContainerStyles}
        >
          <section>
            {props.completed_todos.map(todo => (

              <div 
                key={todo.title} 
                style={{
                  borderColor: todo.color,
                  backgroundColor: appColors.bg_color,
                  color: appColors.text_color,
                }}
              >
                <p>{todo.title}</p>
                <p
                  style={{
                    color: appColors.text_color
                  }}
                >
                  {todo.category}
                </p>
              </div>
            ))}
          </section>

          <button 
            type="button"
            onClick={props.deleteTodos}
          >
            Eliminar TODOs
          </button>
        </section>
      }

      <button 
        type='button'
        className='completed_btn'
        onClick={() => setShowCompletedTodos(!showCompletedTodos)}
        style={btnStyle}
      >
        Completed TODOs
      </button>

    </article>
  );
}

export {CompletedTodos};