import "./TodoGenerator.css";
import React, { useState, useContext } from "react";
import { ColorsContext } from "../Context/ColorsContext";
import { TodoContext } from "../Context/TodoContext";

function TodoGenerator() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('#D2E4C9');
  const { appColors } = useContext(ColorsContext);
  const { addTodo } = useContext(TodoContext);

  function handleSubmit(e){
    e.preventDefault();

    if(title === '' || category === '' || color === ''){
      alert('Debes de llenar todos los campos');
      return;
    }

    const newTodo = {
      title: title, 
      category: category,
      color: color, 
      date: getCurrentDate(),
      completed: false
    }

    setTitle('');
    setCategory('');
    setColor('#D2E4C9');

    addTodo(newTodo);
  } 

  function getCurrentDate(){
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    return `${day}/${month}/${year}`;
  }

  return (
    <article 
      className="todo_generator"
      style={{
        borderColor : appColors.border_color,
        backgroundColor: appColors.contrast_color,
      }}
    >
      <p
        style={{
          backgroundColor: appColors.contrast_color,
          color: appColors.bg_color
        }}
      >
        Define tu nueva tarea
      </p>
      <form 
        className="todo_generator--form"
        style={{
          backgroundColor: appColors.bg_color,
          color: appColors.text_color
        }}
        onSubmit={e => handleSubmit(e)}
      >
        <div>
          <label 
            htmlFor="title"
            style={{
              color: appColors.text_color
            }}
          >
            Titulo
          </label>
          <input 
            name="title" 
            id="title" 
            type="text" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{
              borderColor: appColors.border_color,
              backgroundColor: appColors.bg_color,
              color: appColors.text_color
            }}
          ></input>
        </div>

        <div>
          <label 
            htmlFor="category"
            style={{
              backgroundColor: appColors.bg_color,
              color: appColors.text_color
            }}
          >
            Categoria
          </label>
          <input 
            name="category" 
            id="category" 
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{
              borderColor: appColors.border_color,
              backgroundColor: appColors.bg_color,
              color: appColors.text_color
            }}
          ></input>
        </div>

        <div>
          <label 
            htmlFor="color"
            style={{
              backgroundColor: appColors.bg_color,
              color: appColors.text_color
            }}
          >
            Color
          </label>
          <input 
            name="color" 
            id="color" 
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
          ></input>
        </div>

        <button 
          type="submit"
          style={{
            borderColor: appColors.border_color,
            backgroundColor: appColors.btns_color,
            color: appColors.text_color
          }}
        >
          Crear Tarea
        </button>
      </form>
    </article>
  );
}

export {TodoGenerator};