import React, { createContext, useContext } from 'react'
import { useTodos } from '../hooks'

export const TodosContext = createContext()
export const TodosProvider = ({ children }) => {
  const { todos, setTodos } = useTodos('')

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  )
}

export const useTodosValue = () => useContext(TodosContext)
