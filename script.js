function mostFrequentChar(str) {
  const lowerStr = str.toLowerCase();
  const charCount = {};

  for (let char of lowerStr) {
    charCount[char] ? charCount[char]++ : (charCount[char] = 1);
  }

  let maxCount = 0;
  let mostFrequent = '';

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostFrequent = char;
    }
  }

  return mostFrequent;
}