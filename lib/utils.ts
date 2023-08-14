//region Utils
export const normalizeTextCase = (text: string) => {
	let smallLetters = text.toLowerCase()
	let removeSpaces = smallLetters.trim()
	let words = removeSpaces.split(" ")
	return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
export const splitText = (text: string) => {
	// The regular expression pattern to match ".", ":", "!", "?", and emojis
	const pattern = /(\.|\:|\!|\?|[\uD800-\uDBFF][\uDC00-\uDFFF])/g

	// Split the text based on the pattern and filter out empty strings
	let sentences = text.split(pattern).filter(sentence => sentence.trim() !== "")

	// Combine the sentences with their respective delimiters
	sentences = sentences.reduce((acc: string[], sentence, index) => {
		if (index % 2 === 0) {
			acc.push(sentence)
		}
		else {
			acc[acc.length - 1] += sentence
		}
		return acc
	}, [])

	return sentences
}