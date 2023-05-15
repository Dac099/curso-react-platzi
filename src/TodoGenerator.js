import "./TodoGenerator.css";
import React, { useState } from "react";

function getRandomPlaceholder(){
  const title_examples = [
    "Pintar la ISS",
    "Crear Facebook",
    "Programar Chat-GPT en bloc de notas",
    "Construir el Falcon 9",
    "Dominar Marte",
    "Visitar agujero negro",
    "Derrocar el imperio de Buzz Lightyear",
    "Grabar Iron Man 5"
  ];

  const randomIndex = Math.floor(Math.random() * title_examples.length);

  return title_examples[randomIndex];
}

function TodoGenerator() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    console.log(title, category, color);
  } 

  return (
    <article className="todo_generator">
      <p>Define tu nueva tarea</p>
      <form 
        className="todo_generator--form"
        onSubmit={e => handleSubmit(e)}
      >
        <div>
          <label htmlFor="title">Titulo</label>
          <input 
            name="title" 
            id="title" 
            type="text" 
            placeholder={getRandomPlaceholder()}
            // value={title}
            onChange={e => setTitle(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="category">Categoria</label>
          <input 
            name="category" 
            id="category" 
            type="text"
            // value={category}
            onChange={e => setCategory(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <input 
            name="color" 
            id="color" 
            type="color"
            // value={color}
            onChange={e => setColor(e.target.value)}
          ></input>
        </div>

        <button type="submit">Crear Tarea</button>
      </form>
    </article>
  );
}

export {TodoGenerator};