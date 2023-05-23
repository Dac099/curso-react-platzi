import './App.css';
import { Categories } from '../Categories';
import { CompletedTodos } from '../CompletedTodos';
import { TodoGenerator } from '../TodoGenerator';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import React, { useState } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { LoadingSkeleton } from '../LoadingSkeleton';

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
    item: todos,
    saveItems: saveTodos,
    isLoading,
    onError
  } = useLocalStorage('TODOS_SAVED', []);
  const [categorySelected, setCategorySelected] = useState('all');

  function deleteTodos(){
    const todos_copy = [...todos];
    const uncompleted_todos = todos_copy.filter(todo => todo.completed === false);

    saveTodos(uncompleted_todos);
  }

  function completeTodo(todo_title) {
    const todos_copy = [...todos];
    const item_target = todos_copy.find(todo => todo.title.toLowerCase() === todo_title.toLowerCase());
    const item_index = todos_copy.findIndex(todo => todo.title === todo_title);

    todos_copy[item_index] = {
      ...item_target,
      completed: true,
    };

    saveTodos(todos_copy);
  }

  return (
    <>  
      <section className='generator_container'>
        <TodoGenerator />
      </section>

      <section className='todos_container'>
        <Categories 
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          todos={todos}
        />

        <TodoList 
          todos={todos}
          isLoading={isLoading}
        > 
          {isLoading && <LoadingSkeleton />}
          {onError && <p>Danos un momento, tenemos complicaciones</p>}

          {!isLoading && todos.filter(todo => todo.completed === false).length < 1 && 
            <p>¿Qué nuevas tareas tienes?</p>
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

        <CompletedTodos 
          completed_todos={todos.filter(todo => todo.completed)}
          deleteTodos={deleteTodos}
        />
      </section>  
    </>
  );
}

export default App;
