
let str1 = "Purwadhika" // 112
// "p" = 16 "u" = 21 "r" = 18 "w" = 23 "a" = 1 
// "d" = 4 "h" = 8 "i" = 9 "k" = 11 "a" = 1

let str2 = "Reading Book!" // 116

function sumLetter(s) {

    let newStr = s.toLowerCase();

    const charValue = {
      'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 
      'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 
      'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
      'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, ' ': 5
    };
  
    let sumValue = 0;
  
    for (const char of newStr) {
      if (char in charValue) {
        sumValue = sumValue + charValue[char];
      } else {
        sumValue += 10; // kalau tdk ada di map maka value = 10
      }
    }
  
    return sumValue;
  }
  
  // Example usage:

  console.log(sumLetter(str1));
  


// function sumLetter(s) {
//     // Write your code here

    
//     let splittedStr = s.toLowerCase().split(""); //['P', 'u', 'r', 'w','a', 'd', 'h', 'i','k', 'a']
//     let container = 0;

//     let allNum = [
//         5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
//         15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
//     ];

//     let allLett = [
//         " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
//         "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
//         "u", "v", "w", "x", "y", "z"
//     ];

//     for (let i = 0; i < splittedStr.length; i++) {

//     }

//     return splittedStr;

// }

// console.log(sumLetter(str));



