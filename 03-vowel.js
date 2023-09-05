// You are given a word. Your task is to find the total vowel letters.
// from the word "book" you have 2 vowels and the return is integer 2

function searchVowel(s) {
  // Write your code here
  const vowels = ["a", "i", "u", "e", "o"];

  let count = 0;

  for (let letter of s.toLowerCase()) {  
    if (vowels.includes(letter)) {
        count++;
        console.log(letter);
    } 
  }

  return count;
}

console.log(searchVowel("Apple"));