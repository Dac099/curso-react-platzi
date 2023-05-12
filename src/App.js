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
    category: "Trabajo"
  },
  {
    title: "Hacer sopa de piedras",
    completed: true,
    color: "#7EBA94",
    category: "Hogar"
  },
  {
    title: "Publicar Xbox Series P",
    completed: false,
    color: "#009933",
    category: "Ocio"
  },
];

const defaultCategories = [
  "Trabajo",
  "Pareja",
  "Hogar",
  "Programacion",
  "Ocio"
];

const defaultCompletedTodos = [
  {
    title: "Hacer sopa de piedras",
    completed: true,
    color: "#7EBA94",
    category: "Hogar"
  },
];

function App() {
  return (
    <>  
      <section className='generator_container'>
        <TodoGenerator />
      </section>

      <section>
        <Categories categories={defaultCategories}/>

        <TodoList> 
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.title}
              title={todo.title} 
              completed={todo.completed} 
            />
          ))}
        </TodoList>  

        <CompletedTodos completed_todos={defaultCompletedTodos}/>
      </section>  
    </>
  );
}

export default App;
