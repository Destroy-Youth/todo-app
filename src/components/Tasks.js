import React from 'react'
import { useTask } from '../hooks'
import Checkbox from './Checkbox'
import { updateTaskState } from '../helpers'

function Tasks() {
  const { tasks } = useTask('1')

  return (
    <div>
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
    </div>
  )
}

export default Tasks
