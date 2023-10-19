import { Analytics, getAnalytics } from 'firebase/analytics'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth'
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore
} from 'firebase/firestore'
import {
  connectFunctionsEmulator,
  Functions,
  getFunctions
} from 'firebase/functions'
import { FirebasePerformance, getPerformance } from 'firebase/performance'
import {
  connectStorageEmulator,
  FirebaseStorage,
  getStorage
} from 'firebase/storage'

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
  VITE_RECAPTCHA_KEY
} = import.meta.env

let firebaseApp: FirebaseApp
let auth: Auth
let firestore: Firestore
let functions: Functions
let storage: FirebaseStorage
let performance: FirebasePerformance
let analytics: Analytics

if (import.meta.env.MODE === 'emulators') {
  firebaseApp = initializeApp({
    apiKey: 'demo-words',
    authDomain: 'demo-words',
    projectId: 'demo-words',
    storageBucket: 'demo-words',
    messagingSenderId: 'demo-words',
    appId: 'demo-words',
    measurementId: 'demo-words'
  })
  auth = getAuth()
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
  firestore = getFirestore()
  connectFirestoreEmulator(firestore, 'localhost', 8081)
  functions = getFunctions(undefined, 'europe-west1')
  connectFunctionsEmulator(functions, 'localhost', 5001)
  storage = getStorage()
  connectStorageEmulator(storage, 'localhost', 9199)
} else {
  firebaseApp = initializeApp({
    apiKey: VITE_FIREBASE_API_KEY,
    authDomain: VITE_FIREBASE_AUTH_DOMAIN,
    projectId: VITE_PROJECT_ID,
    storageBucket: VITE_STORAGE_BUCKET,
    messagingSenderId: VITE_MESSAGING_SENDER_ID,
    appId: VITE_APP_ID
  })
  auth = getAuth(firebaseApp)
  firestore = getFirestore(firebaseApp)
  functions = getFunctions(firebaseApp, 'europe-west1')
  storage = getStorage(firebaseApp)
  performance = getPerformance(firebaseApp)
  analytics = getAnalytics(firebaseApp)
  initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider(VITE_RECAPTCHA_KEY),
    isTokenAutoRefreshEnabled: true
  })
}

auth.useDeviceLanguage()

export {
  analytics,
  auth,
  firebaseApp,
  firestore,
  functions,
  performance,
  storage
}
