// [!] Basic Operators in JS
console.log(3 + 3);
console.log(3 - 3);
console.log(3 * 3);
console.log(3 / 3);
console.log(3 % 3);
console.log(10 % 3); //remainder / sisa bagi
console.log(17 % 5);
console.log(3 ** 3);


console.log("2" + 2);
console.log(2 + "2" + "2");

console.log ("2" * "2");
console.log ("2" - "2");
console.log ("2" % "2");
// hanya akan concat dan menghasilkan string ketika operasi penjumlahan (+), selain itu tidak
console.log("3" * 2 + "9");
console.log("3" + "3" * "2");
console.log("2" + "2" + "2" + "2");
console.log(2 + 2 + "2" + 2);

// [!] Modify in Place
let n = 4;
n += 2; // same as -> n = n + 2   = 6
n *= 4; //         -> n = n * 4   = 24

console.log(n);

// [!] Increment & Decrement
let counter = 2;

counter++ //adding value to the variable by 1 (counter = counter + 1)
console.log(counter);
counter-- //decrease value to the variable by 1 (counter = counter - 1)
console.log(counter);

// [!] Prefix & Postfix
let preCounter = 0;
console.log(++preCounter); // prefix

let postCounter = 0;
console.log(postCounter++); // prefix -> (console.log) dipanggil duluan sebelum increment, increment di belakang, therefore its 0
console.log(postCounter);

// Membulatkan number
let num = 20.45;
console.log(Math.round(num)); // membulatkan dengan aturan umum matematika
console.log(Math.floor(num)); // membulatkan ke bawah
console.log(Math.ceil(num)); // membulatkan ke atas