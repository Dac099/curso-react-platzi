import './App.css';
import { Categories } from '../Categories';
import { CompletedTodos } from '../CompletedTodos';
import { TodoGenerator } from '../TodoGenerator';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import React, { useContext } from 'react';
import { LoadingSkeleton } from '../LoadingSkeleton';
import { Error } from '../Error';
import { TodoContext } from '../Context/TodoContext';
import { MdColorLens as ColorsIcon } from "react-icons/md";
import { Modal } from '../Modal';
import { ColorsOptions } from '../ColorsOptions';
import { ColorsContext } from '../Context/ColorsContext';

// const defaultTodos = [
//   {
//     title: "Apagar el sol",
//     completed: false,
//     color: "#CCE4F7",
//     category: "Trabajo",
//     date: getCurrentDate(),
//   },
//   {
//     title: "Hacer sopa de piedras",
//     completed: false,
//     color: "#7EBA94",
//     category: "Hogar",
//     date: getCurrentDate(),
//   },
//   {
//     title: "Publicar Xbox Series P",
//     completed: false,
//     color: "#009933",
//     category: "Ocio",
//     date: getCurrentDate(),
//   },
// ];

// function getCurrentDate(){
//   const date = new Date();
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const year = date.getFullYear().toString();

//   return `${day}/${month}/${year}`;
// }


function App() {
  const {
    todos,
    isLoading,
    onError, 
    categorySelected,
    deleteTodos,
    completeTodo,
    openModal, 
    setOpenModal,
  } = useContext(TodoContext);

  const {
    appColors,
  } = useContext(ColorsContext);

  const btnColorsTheme = {    
    borderColor: appColors.border_color,
    backgroundColor: appColors.btns_color,
    color: appColors.text_color
  };

  return (
    <>  
      <section className='generator_container'>
        <TodoGenerator />
      </section>

      <section className='todos_container'>
        <Categories />

        <TodoList 
          todos={todos}
          isLoading={isLoading}
          onError={onError}
        > 
          {isLoading && <LoadingSkeleton />}
          {onError && <Error msg={"Opps! Lo sentimos, tuvimos un error al cargar tus tareas"}/>}

          {(!isLoading && !onError) && todos.filter(todo => todo.completed === false).length < 1 && 
            <p className='empty-todos--text'>¿Qué nuevas tareas tienes?</p>
          }

          {categorySelected === 'all' && 
            todos
              .filter(todo => todo.completed === false)
              .map(todo => (
                <TodoItem  
                  key={todo.title}
                  title={todo.title} 
                  date={todo.date}
                  completeTodo={completeTodo}
                />
              ))
          }

          {(categorySelected !== 'all') &&
            todos
              .filter(todo => (todo.category === categorySelected && todo.completed === false))
              .map(todo => (
                <TodoItem  
                  key={todo.title}
                  title={todo.title} 
                  date={todo.date}
                  completeTodo={completeTodo}
                />
              ))
          }
        </TodoList>  


        <section className='buttons--container'> 

          <button 
            className="colors--btn"
            style={btnColorsTheme}
            type='button'
            onClick={() => setOpenModal(true)}
          >
            <ColorsIcon /> Colores
          </button>

          <CompletedTodos 
            completed_todos={todos.filter(todo => todo.completed)}
            deleteTodos={deleteTodos}
          />

        </section>

      </section> 

      {openModal && <Modal modalContent={<ColorsOptions />}/>}

    </>
  );
}

export default App;
