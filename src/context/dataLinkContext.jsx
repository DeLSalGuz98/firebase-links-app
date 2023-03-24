import { createContext, useState } from "react";

export const dataLinkContext = createContext();

export function DataLinkProvider({children}){
  const [dataLink, setDataLink] = useState({});
  return(
    <dataLinkContext.Provider value={{dataLink, setDataLink}}>
      {children}
    </dataLinkContext.Provider>
  )
}