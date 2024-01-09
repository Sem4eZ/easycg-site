// firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCSOy91PSvMBKqsEJEjzTkVxYlv9Ip7CYY',
  authDomain: 'easy-admin-28c89.firebaseapp.com',
  projectId: 'easy-admin-28c89',
  storageBucket: 'easy-admin-28c89.appspot.com',
  messagingSenderId: '957715692684',
  appId: '1:957715692684:web:a265413156f8a11f258fa9',
  measurementId: 'G-BWVZKQSL76',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebaseApp = app

export const firebaseAuthInstance = getAuth(app)
export const db = getFirestore(app)

export default app
