import { initializeApp } from 'firebase-admin/app'
import { onWordCreated } from './words'

initializeApp({
  projectId:
    process.env.GCLOUD_PROJECT === 'demo-words' ? 'demo-words' : undefined
})

export { onWordCreated }
