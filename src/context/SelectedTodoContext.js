import React, { createContext, useContext, useState } from 'react'

export const SelectedTodoContext = createContext()
export const SelectedTodoProvider = ({ children }) => {
  //TODO Take the first todo of the Todos context
  const [selectedTodo, setSelectedTodo] = useState({})

  return (
    <SelectedTodoContext.Provider value={{ selectedTodo, setSelectedTodo }}>
      {children}
    </SelectedTodoContext.Provider>
  )
}

export const useSelectedTodoValue = () => useContext(SelectedTodoContext)
