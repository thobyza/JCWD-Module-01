/*  exercise 1 
    create a function
        input: "Pig latin is cool !"
        return: "igPay atinlay siay oolcay !ay"

    --

    LOGIC(?)
    - input -> split by space
    - splitted Input index[0] -> move to index length + 1
        - and then add "ay"
    - finally join all array into one string
*/

function myFunc(s) {
  let splitArr = s.split(" "); // [ 'Pig', 'latin', 'is', 'cool!' ]
  let container = [];

  for (let i = 0; i < splitArr.length; i++) {
    let word = splitArr[i]; // "Pig" (not in an array =/ ["Pig"])

    let firstLetter = word[0]; // "P"
    let restOfWord = word.slice(1); // ["i", "g"] > slice at i=1 and return the rest

    let convertedWord = restOfWord + firstLetter + "ay";
    container.push(convertedWord);

    console.log(word);
  }

  return container.join(" ");
}

// console.log(myFunc("Pig latin is cool !"));


/*  exercise 2
    create a function:
        if begin with a vowel, + "way"
        input: "Pig latin is cool !"
        return: "igPay atinlay siway oolcar !ay"
*/

function myFunc2(s) {
  let splitArr = s.split(" "); // [ 'Pig', 'latin', 'is', 'cool!' ]
  let container = [];
  let vowel = "aiueoAIUEO";

  for (let i = 0; i < splitArr.length; i++) {
    let word = splitArr[i]; // "Pig" (not in an array =/ ["Pig"])

    let firstLetter = word[0]; // "P"
    let restOfWord = word.slice(1); // ["i", "g"] > slice at i=1 and return the rest
    let convertedWord = [];

    if (vowel.includes(firstLetter)) {
      convertedWord = restOfWord + firstLetter + "way";
    } else {
      convertedWord = restOfWord + firstLetter + "ay";
    }

    container.push(convertedWord);
  }

  return container.join(" ");
}

console.log(myFunc2("Pig latin is cool !"));

/*  exercise 3
    create a function:
    input: "igPay atinlay siway oolcay !ay"
    return: "Pig latin is cool"
*/

function myFunc3(s) {
  let splitArr = s.split(" ");
  let container = [];

  for (let i = 0; i < splitArr.length; i++) {
    let word = splitArr[i]; // i=0 > "igPay"
    let temp = "";

    if (word.includes("way")) {
      temp = word.slice(0, -3);
      container.push(temp.slice(-1) + temp.slice(0, -1));
    } else if (word.includes("ay")) {
      temp = word.slice(0, -2);
      container.push(temp.slice(-1) + temp.slice(0, -1));
    }
  }

  return container.join(" ");
}

console.log(myFunc3("igPay atinlay siway oolcay !ay"));
