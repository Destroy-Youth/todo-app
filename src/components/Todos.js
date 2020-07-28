import React from 'react'
import { useTodos } from '../hooks'
import styled from 'styled-components'
import { useSelectedTodoValue } from './../context/Index'

const NoSelectSpan = styled.span`
  cursor: pointer;
  user-select: none;

  &:hover {
    border-radius: 3px;
    background-color: rgb(255, 255, 255, 0.2);
  }
`

const H2 = styled.h2`
  border-bottom: 1px solid rgb(0, 0, 0);
  margin-left: 0.3rem;
  margin-right: 1rem;
  font-size: 2rem;
`

function Todos() {
  const { selectedTodo, setSelectedTodo } = useSelectedTodoValue()

  const { todos } = useTodos('1')

  return (
    <div>
      <H2>Todos</H2>
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
