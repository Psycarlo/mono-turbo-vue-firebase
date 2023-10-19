import { Auth } from 'firebase/auth'
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  Timestamp
} from 'firebase/firestore'
import { Functions } from 'firebase/functions'
import { FirebaseStorage } from 'firebase/storage'
import { COLLECTIONS, Word } from 'shared'

export default function makeFirebase(firebase: {
  firestore: Firestore
  functions: Functions
  auth: Auth
  storage: FirebaseStorage
}) {
  function createCollection<T = DocumentData>(collectionName: string) {
    return collection(
      firebase.firestore,
      collectionName
    ) as CollectionReference<T>
  }

  const wordsCollection = createCollection<Word>(COLLECTIONS.words)

  function createWord(word: Word['word']) {
    return addDoc(wordsCollection, {
      word,
      createdAt: Timestamp.now()
    })
  }

  return Object.freeze({
    createWord
  })
}
