import { firebase } from '../firebase'

export const updateTaskState = (task) => {
  firebase
    .firestore()
    .collection('tasks')
    .doc(task.id)
    .update({ finished: !task.finished })
}
