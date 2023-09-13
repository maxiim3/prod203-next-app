export default function normalizeTextCaseHelperFunction(text: string) {
   let smallLetters = text.toLowerCase()
   let removeSpaces = smallLetters.trim()
   let words = removeSpaces.split(' ')
   return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
