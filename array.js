// [!] Creating an array, storing values
let arr = ["a", "b", "c", "e"];          // cara 1 menyimpan data ke array

let arr2 = new Array(13, 9, 5, 40);      // cara 2 menyimpan data ke array

console.log(arr);
console.log(arr2);

// [!] Accessing a value of an array, indexing
console.log(arr[2]);
console.log(arr2[0]);

// [!] Array Built-In Methods
let data = [1, 2, 3];

data.push(4); // inserting new value to the array from the End
console.log(data);

data.unshift(0); // inserting new value to the array from the Start 
console.log(data);

data.pop(); // removes the Last value of an array
console.log(data);

data.shift(); // removes the First value of an array
console.log(data);

console.log(data.length); // jumlah value dari array, bukan panjang index array !!

let str = "Purwadhika Bandung Web Development";
let strSplit = str.split(" "); // string -> array, di split by apa?
console.log(strSplit);

let strJoin = strSplit.join(" - "); // array -> split, akan di join dengan apa?
console.log(strJoin);

let student = ["john", "katy", "alfred"];
console.log(student.sort());           // ascending
console.log(student.sort().reverse()); // descending

let grade = [80, 100, 90]; 
console.log(grade.sort());                // -> the sorting doesn't work on numerical.. so...
console.log(grade.sort((a, b) => a - b)); // syntax to adjust numerical array sorting, ascending
console.log(grade.sort((a, b) => b - a)); // syntax to adjust numerical array sorting, descending

// 
let age = [20, 30, 40, 50, 60, 70]; // filter age > 30
console.log(age.filter(item => item > 30));