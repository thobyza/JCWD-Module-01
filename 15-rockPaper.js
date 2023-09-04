/* [15] Write a game of rock, paper, scissor function 
that will return 'Win' or 'Lose'. The function will randomly 
pick between rock, paper, or scissor.
    a. Example: if you throw a rock as an argument and the 
    function pick a scissor then it will return 'Win'

*/

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

function rockPaperSci(itemInput) {

    let funcItem = ["rock", "paper", "scissor"];
    let randomItem = funcItem[Math.floor(Math.random() * funcItem.length)]; // -> random: rock, paper, scissors

    console.log(randomItem);

    if (itemInput == "rock") {
        if (itemInput == "rock" && randomItem == "rock") {
            return console.log("Draw!");
        } 
        else if (itemInput == "rock" && randomItem == "paper") {
            return console.log("You Lose!");
        } 
        else if (itemInput == "rock" && randomItem == "scissor") {
            return console.log("You Win!");
        } 
    }

    if (itemInput == "paper") {
        if (itemInput == "paper" && randomItem == "rock") {
            return console.log("You Win!");
        } 
        else if (itemInput == "paper" && randomItem == "paper") {
            return console.log("Draw!");
        } 
        else if (itemInput == "paper" && randomItem == "scissor") {
            return console.log("You Lose!");
        } 
    }

    if (itemInput == "scissor") {
        if (itemInput == "scissor" && randomItem == "rock") {
            return console.log("You Lose!");
        } 
        else if (itemInput == "scissor" && randomItem == "paper") {
            return console.log("You Win!");
        } 
        else if (itemInput == "scissor" && randomItem == "scissor") {
            return console.log("Draw!");
        } 
    }
}

rockPaperSci("rock");

// **Jwbn Kak Ilham



