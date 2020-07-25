import React from 'react'
import { useTodo } from '../hooks'

function Todos() {
  const { todos } = useTodo('1')

  return (
    <div>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.name}</p>
      })}
    </div>
  )
}

export default Todos
