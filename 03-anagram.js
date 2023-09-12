
// let s = "Dirty room";
// let t = "dormitory";

let s = "Vacation Time";
let t = "I am not Active";

function areAnagram(str1, str2) {
    
    let newStr1 = str1.replace(/\s/g, "").toLowerCase().split("").sort().join("");
    let newStr2 = str2.replace(/\s/g, "").toLowerCase().split("").sort().join("");

    console.log([newStr1, newStr2]);
    return newStr1 === newStr2;
    
}

console.log(areAnagram(s, t));