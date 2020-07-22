import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'todo-react-app-71696.firebaseapp.com',
  databaseURL: 'https://todo-react-app-71696.firebaseio.com',
  projectId: 'todo-react-app-71696',
  storageBucket: 'todo-react-app-71696.appspot.com',
  messagingSenderId: '719442325922',
  appId: '1:719442325922:web:d158a39e6e65b23a8cc2fb',
})

export { firebaseConfig as firebase }
