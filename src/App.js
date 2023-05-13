import './App.css';
import { Categories } from './Categories';
import { CompletedTodos } from './CompletedTodos';
import { TodoGenerator } from './TodoGenerator';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

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
    completed: true,
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

const defaultCategories = [
  "Trabajo",
  "Pareja",
  "Hogar",
  "Programacion",
  "Ocio",
  "dasdsad",
  "dskajdlksajdlkasjdlkajd",
  "dskajdklajdkla",
  "asjklajdklasjd",
];

const defaultCompletedTodos = [
  {
    title: "Hacer sopa de piedras",
    completed: true,
    color: "#7EBA94",
    category: "Hogar",
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
  return (
    <>  
      <section className='generator_container'>
        <TodoGenerator />
      </section>

      <section className='todos_container'>
        <Categories categories={defaultCategories}/>

        <TodoList> 
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.title}
              title={todo.title} 
              completed={todo.completed} 
              date={todo.date}
            />
          ))}
        </TodoList>  

        <CompletedTodos completed_todos={defaultCompletedTodos}/>

        <button type='button' className='completed_btn'>Completed TODOs</button>
      </section>  
    </>
  );
}

export default App;
