import React from 'react'
import { useTask } from '../hooks'
import Checkbox from './Checkbox'

function Tasks() {
  const { tasks } = useTask('1')

  return (
    <div>
      {tasks.map((task) => {
        return (
          <Checkbox
            label={task.description}
            isChecked={task.isFinished}
            key={task.id}
          />
        )
      })}
    </div>
  )
}

export default Tasks
