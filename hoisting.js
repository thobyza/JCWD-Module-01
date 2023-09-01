// javascript membaca dari kiri ke kanan - lalu atas ke bawah

// 
// hoisting = seperti mencari dulu ke bawah
// 
// kena sifat hoisting -> var, function (kecuali arrow func)

console.log(str);

var str  = "abc"; // kena hoisting

console.log(square(5));

function square(number) {  // kena hoisting
    return number * number;
}

console.log(square2(5)); // tidak kena hoisting. 
const square2 = (number) => number * number; 


