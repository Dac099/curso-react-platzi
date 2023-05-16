import './App.css';
import { Categories } from './Categories';
import { CompletedTodos } from './CompletedTodos';
import { TodoGenerator } from './TodoGenerator';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import React, { useState } from 'react';

const defaultTodos = [
  {
    title: "Apagar el sol",
    completed: false,
    color: "#CCE4F7",
    category: "Trabajo",
    date: getCurrentDate(),
  },
  {
    title: "Hacer sopa de piedras",
    completed: false,
    color: "#7EBA94",
    category: "Hogar",
    date: getCurrentDate(),
  },
  {
    title: "Publicar Xbox Series P",
    completed: false,
    color: "#009933",
    category: "Ocio",
    date: getCurrentDate(),
  },
];

function getCurrentDate(){
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
}

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [categories, setCategories] = useState(todos.map(todo => todo.category));
  const [indexCategory, setIndexCategory] = useState(-1);

  return (
    <>  
      <section className='generator_container'>
        <TodoGenerator />
      </section>

      <section className='todos_container'>
        <Categories 
          categories={categories} 
          indexCategory={indexCategory}
          setIndexCategory={setIndexCategory}
        />

        <TodoList> 
          {indexCategory === -1 && 
            todos.map(todo => (
              <TodoItem  
                key={todo.title}
                title={todo.title} 
                completed={todo.completed} 
                date={todo.date}
              />
            ))
          }

          {(indexCategory !== -1) &&
            todos
              .filter(todo => todo.category === categories[indexCategory])
              .map(todo => (
                <TodoItem  
                  setTodos={setTodos}
                  todos={todos}
                  key={todo.title}
                  title={todo.title} 
                  completed={todo.completed} 
                  date={todo.date}
                />
              ))
          }
        </TodoList>  

        <CompletedTodos completed_todos={todos.filter(todo => todo.completed)}/>
      </section>  
    </>
  );
}

export default App;
