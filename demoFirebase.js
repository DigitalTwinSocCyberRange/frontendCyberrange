import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init

//ad your firebase config here and rename file to firebase.js

// utils
const db = firebase.firestore()


// collection references
const userDashboard = db.collection('cyberrangeDashboard')


// export utils/refs
export {
db,
userDashboard

}
