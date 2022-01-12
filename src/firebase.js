import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
apiKey: "AIzaSyAZ5kdu227j0r7IOqNNE0kET5spK3fl_S4",
authDomain: "digitaltwincyberrange.firebaseapp.com",
projectId: "digitaltwincyberrange",
storageBucket: "digitaltwincyberrange.appspot.com",
messagingSenderId: "338562189196",
appId: "1:338562189196:web:92cc478f2ff79cac1b78a9"

}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()


// collection references
const userDashboard = db.collection('visualCR')
const VM_db = db.collection('visualPseudonyms')


// export utils/refs
export {
db,
userDashboard, VM_db

}