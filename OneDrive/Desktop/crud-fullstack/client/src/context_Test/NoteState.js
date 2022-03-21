import NoteContext from "./NoteContext";
import React from 'react'

const NoteState = ({children}) => {
  let someData = {
    name: "Joy",
    position: "Developer"
  }
  return (
    <NoteContext.Provider value={{someData}}>
      {children}
    </NoteContext.Provider>
  )
}

export default NoteState