import "./TodoGenerator.css";

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
  return (
    <article className="todo_generator">
      <p>Define tu nueva tarea</p>
      <form className="todo_generator--form">
        <div>
          <label htmlFor="title">Titulo</label>
          <input name="title" id="title" type="text" placeholder={getRandomPlaceholder()}></input>
        </div>

        <div>
          <label htmlFor="category">Categoria</label>
          <input name="category" id="category" type="text"></input>
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <input name="color" id="color" type="color"></input>
        </div>

        <button type="submit">Crear Tarea</button>
      </form>
    </article>
  );
}

export {TodoGenerator};