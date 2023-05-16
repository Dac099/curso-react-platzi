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
    completed: true,
    color: "#CCE4F7",
    category: "Trabajo",
    date: getCurrentDate(),
  },
  {
    title: "Hacer sopa de piedras",
    completed: true,
    color: "#7EBA94",
    category: "Hogar",
    date: getCurrentDate(),
  },
  {
    title: "Publicar Xbox Series P",
    completed: true,
    color: "#009933",
    category: "Ocio",
    date: getCurrentDate(),
  },
];

const defaultCategories = [
  "Trabajo",
  "Pareja",
  "Hogar",
  "Programacion",
  "Ocio",
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
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <>  
      <section className='generator_container'>
        <TodoGenerator />
      </section>

      <section className='todos_container'>
        <Categories categories={defaultCategories}/>

        <TodoList> 
          {todos.map(todo => (
            <TodoItem 
              key={todo.title}
              title={todo.title} 
              completed={todo.completed} 
              date={todo.date}
            />
          ))}
        </TodoList>  

        <CompletedTodos completed_todos={completedTodos}/>
      </section>  
    </>
  );
}

export default App;
