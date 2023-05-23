import { useState, useEffect } from "react";

function useLocalStorage (itemName, initialValue){
  const [item, setItem] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [onError, setOnError] = useState(false);


  useEffect(()=>{
    setTimeout(() => {
      try {
        const itemsLocalStorage = localStorage.getItem(itemName);
        let parsedItems;
      
        if(!itemsLocalStorage){
          localStorage.setItem(itemName, initialValue);;
          parsedItems = initialValue;
        }else{
          parsedItems = JSON.parse(localStorage.getItem(itemName));
          setItem(parsedItems);
        }
  
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setOnError(true);
      }
    }, 1500);
    
  }, []);

  function saveItems(newItems){
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  }

  return {
    item, 
    saveItems,
    isLoading, 
    onError,
  };
}

export {useLocalStorage};