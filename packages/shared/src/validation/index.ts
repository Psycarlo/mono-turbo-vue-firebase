import CONFIG from '../config'

function hasWordValidLength(word: string) {
  return (
    word.length >= CONFIG.minCharacters && word.length <= CONFIG.maxCharacters
  )
}

export { hasWordValidLength }
