import './CompletedTodos.css';
import React, { useState } from 'react';

function CompletedTodos(props){
  const [showCompletedTodos, setShowCompletedTodos] = useState(false)

  

  if(props.completed_todos.length < 1){
    return (
      <article className='container--completed--todos'>
        {showCompletedTodos && 
          <section className='completed_container--empty'>
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
        <section className='completed_container'>
          <section>
            {props.completed_todos.map(todo => (

              <div 
                key={todo.title} 
                style={{borderColor: todo.color}}
              >
                <p>{todo.title}</p>
                <p>{todo.category}</p>
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
      >
        Completed TODOs
      </button>

    </article>
  );
}

export {CompletedTodos};