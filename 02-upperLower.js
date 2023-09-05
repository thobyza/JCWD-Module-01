

function upperLower(s) {
    // Write your code here
    let upperCase = 0;
    let lowerCase = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= "A" && s[i] <= "Z") {
            upperCase++;
        } else if (s[i] >= "a" && s[i] <= "z") {
            lowerCase++
        }
    }

    return [lowerCase, upperCase]

}

console.log(upperLower("Purw4dhika"));


