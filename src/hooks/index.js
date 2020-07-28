import { firebase } from '../firebase'
import { useState, useEffect } from 'react'

export const useTasks = (selectedTodo) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('todoId', '==', selectedTodo)

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }))

      setTasks(newTasks)
    })

    return () => unsubscribe()
  }, [selectedTodo])

  return { tasks }
}

export const useTodos = (userId) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('todos')
      .where('userId', '==', userId)
      .orderBy('todoId')
      .get()
      .then((snapshot) => {
        const allTodos = snapshot.docs.map((todo) => ({
          ...todo.data(),
          docId: todo.id,
        }))

        if (JSON.stringify(allTodos) !== JSON.stringify(todos)) {
          setTodos(allTodos)
        }
      })
  }, [todos, userId])
  return { todos, setTodos }
}
