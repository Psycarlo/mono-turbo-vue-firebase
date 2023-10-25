import { initializeApp } from 'firebase-admin/app'
import { https, logger } from 'firebase-functions/v2'
import { onDocumentCreated } from 'firebase-functions/v2/firestore'
import { COLLECTIONS, LOGS, Word } from 'shared'

initializeApp({
  projectId:
    process.env.GCLOUD_PROJECT === 'demo-words' ? 'demo-words' : undefined
})

const onWordCreated = onDocumentCreated(
  {
    document: `${COLLECTIONS.words}/{wordId}`,
    region: 'europe-west1'
  },
  async (event) => {
    const snapshot = event.data
    if (!snapshot) {
      logger.warn(LOGS.SNAPSHOT_MISSING)
      throw new https.HttpsError('aborted', LOGS.SNAPSHOT_MISSING)
    }

    const word = snapshot.data() as Word

    const wordLength = word.word.length

    const wordUpdate: Pick<Word, 'characters'> = {
      characters: wordLength
    }

    return snapshot.ref.update(wordUpdate)
  }
)

export { onWordCreated }
