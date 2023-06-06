import "./ColorsOptions.css";
import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { ColorsContext } from "../Context/ColorsContext";

function ColorsOptions() {
  const {
    setOpenModal,
  } = useContext(TodoContext);
  
  const {
    appColors,
    setAppColors
  } = useContext(ColorsContext);
  
  const [colorSettings, setColorSettings] = useState(appColors);
  
  function handleClick() {
    //Verificamos que se hayan hecho cambios en los colores, para no hacer renders innecesarios
    if(JSON.stringify(appColors) !== JSON.stringify(colorSettings)){
      setAppColors(colorSettings);
    }
    setOpenModal(false);
  }

  return (
    <article className="card--options">

      <section className="card--colors">

        <div>
          <label htmlFor="bg">Fondo:</label>

          <input 
            type="color" 
            id="bg" 
            onChange={(e) => setColorSettings((prevState) => ({
              ...prevState,
              bg_color: e.target.value
            }))}
            value={colorSettings.bg_color}
          ></input>
        </div>

        <div>
          <label htmlFor="border">Bordes:</label>

          <input 
            type="color" 
            id="border" 
            onChange={(e) => setColorSettings((prevState) => ({
              ...prevState,
              border_color: e.target.value
            }))}
            value={colorSettings.border_color}
          ></input>
        </div>

        <div>
          <label htmlFor="btns">Botones:</label>

          <input 
            type="color" 
            id="btns" 
            onChange={(e) => setColorSettings((prevState) => ({
              ...prevState,
              btns_color: e.target.value
            }))}
            value={colorSettings.btns_color}
          ></input>
        </div>

        <div>
          <label htmlFor="complete">Boton de completar:</label>

          <input 
            type="color" 
            id="complete" 
            onChange={(e) => setColorSettings((prevState) => ({
              ...prevState,
              complete_color: e.target.value
            }))}
            value={colorSettings.complete_color}
          ></input>
        </div>
        <div>

          <label htmlFor="contrast">Contraste:</label>

          <input 
            type="color" 
            id="contrast" 
            onChange={(e) => setColorSettings((prevState) => ({
              ...prevState,
              contrast_color: e.target.value
            }))}
            value={colorSettings.contrast_color}
          ></input>
        </div>

        <div>
          <label htmlFor="text">Texto:</label>

          <input 
            type="color" 
            id="text" 
            onChange={(e) => setColorSettings((prevState) => ({
              ...prevState,
              text_color: e.target.value
            }))}
            value={colorSettings.text_color}
          ></input>
        </div>

      </section>

      <button
        onClick={handleClick}
      >
        Aceptar y Guardar
      </button>
    </article>
  );
}

export { ColorsOptions };