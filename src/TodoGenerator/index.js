import "./TodoGenerator.css";
import React, { useState, useContext } from "react";
import { ColorsContext } from "../Context/ColorsContext";

function TodoGenerator() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('#000000');
  const { appColors } = useContext(ColorsContext);

  function handleSubmit(e){
    e.preventDefault();

    console.log(title, category, color);
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
              backgroundColor: appColors.bg_color
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
              backgroundColor: appColors.bg_color
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