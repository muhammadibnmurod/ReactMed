export function useAdvancedSearch() {

  function normalizeText(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // Maxsus belgilarni olib tashlash
      .replace(/\s+/g, ' ')     // Ko'p bo'shliqlarni bittaga aylantirish
      .trim()
  }

  function advancedSearch(searchValue: string, targetText: string): boolean {
    if (!searchValue.trim() || !targetText.trim()) return false

    const normalizedSearch = normalizeText(searchValue)
    const normalizedTarget = normalizeText(targetText)

    if (normalizedTarget === normalizedSearch) return true

    if (normalizedTarget.includes(normalizedSearch)) return true

    const targetWords = normalizedTarget.split(' ')
    const searchWords = normalizedSearch.split(' ')
    
    const wordStartsMatch = targetWords.some(targetWord => 
      searchWords.some(searchWord => targetWord.startsWith(searchWord))
    )
    if (wordStartsMatch) return true

    const allWordsPresent = searchWords.every(searchWord => 
      normalizedTarget.includes(searchWord)
    )
    if (allWordsPresent) return true

    if (normalizedSearch.length >= 3) {
      const partialMatch = targetWords.some(targetWord => 
        targetWord.includes(normalizedSearch) && targetWord.length >= normalizedSearch.length
      )
      if (partialMatch) return true
    }

    if (normalizedSearch.length >= 2) {
      const searchChars = normalizedSearch.split('')
      let targetIndex = 0
      let matchedChars = 0

      for (const char of searchChars) {
        const foundIndex = normalizedTarget.indexOf(char, targetIndex)
        if (foundIndex !== -1) {
          targetIndex = foundIndex + 1
          matchedChars++
        }
      }

      if (matchedChars / searchChars.length >= 0.7) return true
    }

    return false
  }

  return {
    advancedSearch,
    normalizeText
  }
}