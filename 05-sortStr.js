// Write a code to sort a string alphabetically (with and without sort function)

// let str = "Bikini bottom"

// function sortStr(s) {
//     s = s.toLowerCase().split("");
//     let res = [];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] <= s[i + 1]) {
//             res.push(s[i])
//         } else if (s[i] >= s[i + 1]) {
//             res.push(s[i + 1], s[i])
//         }
//     }

//     return res;
// }

// console.log(sortStr(str));

// function sortStr(arr) {
//     arr = arr.split("");
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr.join("");
// }
// console.log(sortStr("dcna"));

function sortStr(s) {
    s = s.toLowerCase().split("");

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] > s[i]) {
                let temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        }
    }

    return s.join(", ");
}

console.log(sortStr("Bikini bottom"));