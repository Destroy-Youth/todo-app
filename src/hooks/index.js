import { firebase } from '../firebase'
import { useState, useEffect } from 'react'

export const useTask = (selectedTodo) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let unsuscribe = firebase
      .firestore()
      .collection('tasks')
      .where('todoId', '==', '1')

    unsuscribe = unsuscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => task)
      setTasks(newTasks)

      return tasks
    })
  }, [selectedTodo])
}
