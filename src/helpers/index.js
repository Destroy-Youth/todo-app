import { firebase } from '../firebase'

export const updateTaskState = (taskId) => {
  firebase
    .firestore()
    .collection('tasks')
    .doc(taskId)
    .update({ finished: true })
}
