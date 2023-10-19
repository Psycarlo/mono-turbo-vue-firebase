import { Timestamp } from './timestamp'

export type Word = {
  /** The word itself */
  word: string
  /** The number of characters for that word */
  characters?: number | undefined
  /** When was created */
  createdAt: Timestamp
}
