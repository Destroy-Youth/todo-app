import React from 'react'
import { useTodo } from '../hooks'
import styled from 'styled-components'

const NoSelectSpan = styled.span`
  cursor: pointer;
  user-select: none;
`

function Todos() {
  const { todos } = useTodo('1')

  return (
    <div>
      {todos.map((todo) => {
        return (
          <ul>
            <li>
              <NoSelectSpan
                key={todo.id}
                onClick={() => console.log('Should change the tasks')}
              >
                {todo.name}
              </NoSelectSpan>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default Todos
