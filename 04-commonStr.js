// Write a code to find most common character from a string
// let str = "Dizzy izzy";
let str = "Los angeles";

function commonChar(s) {
    s = s.toLowerCase();
    let candidateMajority = "";
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === candidateMajority) {
            count++
        } else {
            count--;
        }

        if (count === 0) {
            candidateMajority = s[i]
            count = 1;
        }
    }

    return candidateMajority;
}

console.log(commonChar(str));