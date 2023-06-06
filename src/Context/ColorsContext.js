import { createContext, useState } from "react";


const ColorsContext = createContext();

function ColorsProvider({children}){
  const [appColors, setAppColors] = useState({
    bg_color: '#ffffff',
    border_color: '#000000',
    btns_color: '#ffdc99',
    complete_color: '#c1bffa',
    contrast_color: '#7eba94',
    text_color: '#000000',
  });

  return <ColorsContext.Provider value={{
    appColors, 
    setAppColors,
  }}>
    {children}
  </ColorsContext.Provider>
}

export {ColorsContext, ColorsProvider};