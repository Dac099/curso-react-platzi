import { useLocalStorage } from "../Hooks/useLocalStorage";
import React, { useState } from "react";

const TodoContext = React.createContext();

function TodoProvider({children}){

  const {
    item: todos,
    saveItems: saveTodos,
    isLoading,
    onError
  } = useLocalStorage('TODOS_SAVED', []);
  const [categorySelected, setCategorySelected] = useState('all');

  function deleteTodos(){
    const todos_copy = [...todos];
    const uncompleted_todos = todos_copy.filter(todo => todo.completed === false);

    saveTodos(uncompleted_todos);
  }

  function completeTodo(todo_title) {
    const todos_copy = [...todos];
    const item_target = todos_copy.find(todo => todo.title.toLowerCase() === todo_title.toLowerCase());
    const item_index = todos_copy.findIndex(todo => todo.title === todo_title);

    todos_copy[item_index] = {
      ...item_target,
      completed: true,
    };

    saveTodos(todos_copy);
  }

  return(
    <TodoContext.Provider value={{
      todos,
      saveTodos,
      isLoading,
      onError,
      categorySelected,
      setCategorySelected,
      deleteTodos,
      completeTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export {TodoProvider, TodoContext};