import { auth, firestore, functions, storage } from '../services/firebase'
import makeFirebase from './firebase'

const firebaseApi = makeFirebase({ firestore, functions, auth, storage })

export { firebaseApi }
