import React from 'react'
import { useTasks } from '../hooks'
import Checkbox from './Checkbox'
import { updateTaskState } from '../helpers'
import styled from 'styled-components'

const Container = styled.section`
  margin-left: 1rem;
`

function Tasks() {
  const { tasks } = useTasks('1')

  return (
    <Container id="tasks">
      {tasks.map((task) => {
        return (
          <Checkbox
            onChange={() => updateTaskState(task)}
            label={task.description}
            isChecked={task.finished}
            key={task.id}
          />
        )
      })}
    </Container>
  )
}

export default Tasks
