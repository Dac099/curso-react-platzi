import { useState } from "react";

function useLocalStorage (itemName, initialValue){
  const itemsLocalStorage = localStorage.getItem(itemName);
  let parsedItems;

  if(!itemsLocalStorage){
    localStorage.setItem(itemName, initialValue);;
    parsedItems = initialValue;
  }else{
    parsedItems = JSON.parse(localStorage.getItem(itemName));
  }

  const [item, setItem] = useState(parsedItems);

  function saveItems(newItems){
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  }

  return [item, saveItems];
}

export {useLocalStorage};