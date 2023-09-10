/*
https://www.hackerrank.com/contests/quiz-3-jcwd0208/challenges
-

An anagram checker is a program or function that determines whether two strings are anagrams of each other. 
An anagram is a word or phrase formed by rearranging the letters of another word or phrase. 
In other words, if the characters of one string can be rearranged to form the other string, they are considered anagrams.

For example, let's consider the strings "listen" and "silent". 
After removing whitespace and converting them to lowercase, both strings become "listen". When sorted, they become "eilnst". 
Since the sorted strings are identical, we conclude that "listen" and "silent" are anagrams.




*/

let strA = "dormitory";
let strB = "dirty room";

function isAnagram(str1, str2) {
  // Write your code here
  let str1Sorted = str1.toLowerCase().split("").sort();
  let str2Sorted = str2.toLowerCase().split("").sort();

  for (const item of str1Sorted) {
    if (item == " ") {
      let index = str1Sorted.indexOf(item);
      str1Sorted.splice(index, 1);
    }
  }

  for (const item of str2Sorted) {
    if (item == " ") {
      let index = str2Sorted.indexOf(item);
      str2Sorted.splice(index, 1);
    }
  }

  if (JSON.stringify(str1Sorted) === JSON.stringify(str2Sorted)) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

isAnagram(strA, strB);

//

function areAnagrams(str1, str2) {
  // Remove whitespace and convert to lowercase
  let newStr1 = str1.replace(/\s/g, "").toLowerCase();
  let newStr2 = str2.replace(/\s/g, "").toLowerCase();

  //  Sort the characters in both strings --> result in string
  let sortedStr1 = newStr1.split("").sort().join("");
  let sortedStr2 = newStr2.split("").sort().join("");

  // return console.log([sortedStr1, sortedStr2]);

  // Compare the sorted strings and return the result
  return sortedStr1 === sortedStr2;
}

areAnagrams(strA, strB);
