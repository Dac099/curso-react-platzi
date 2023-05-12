function Categories(props){
  return (
    <article>
      {props.categories.map(category => (
        <p key={category}>{category}</p>
      ))}
    </article>
  );
}

export {Categories};