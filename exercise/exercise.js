// [1] Write a code to find an area of rectangle!
// area of rectangle = length * width
let length = 6;
let width =  4;

let rectangleArea = length * width;
console.log(rectangleArea);
console.log(`luas dari persegi panjang dengan 
panjang ${length} dan lebar ${width} adalah ${length * width}`);

// [2] write a code to find perimeter of rectangle!
// perimeter of rectangle = 2 * length + 2 * width
let rectanglePerimeter = 2 * length + 2 * width;
console.log(rectanglePerimeter);
console.log(`keliling dari persegi panjang dengan 
panjang ${length} dan lebar ${width} adalah ${2 * length + 2 * width}`);

// [3] write a code to find diameter, circumference and area of circle!
/* formula:
diameter      = radius * 2
circumference = 2 * 3.14 * radius
area          = 3.14 * radius * radius
*/
let radius = 4;

let circleDiameter = radius * 2;
let circleCircumference = 2 * 3.14 * radius;
let circleArea = 3.14 * radius * radius;

console.log(circleDiameter);
console.log(circleCircumference);
console.log(circleArea);

// [4] Write a code to find angles of triangle if two angles are given!
// formula = 180 - angleA - angleB
let angleA = 45;
let angleB = 60;

let angleC = 180 - angleA - angleB;

console.log(angleC);
console.log(`sudut ketiga dari sebuah setitiga dengan sudut 45° dan 60° adalah ${180 - angleA - angleB}°`);

// [5] Write a code to get difference between dates in days
/* 
- set date 1 -> today's date
- set date 2 -> 1 january 2024 (new year)
- days difference = (date 2) - (date 1) => result in milliseconds
- milisecond convert to days 
*/
let date1 = new Date();
let date2 = new Date("2024-01-01");

let diffInMiliseconds = date2 - date1 ;
console.log(diffInMiliseconds);

let diffInDays = diffInMiliseconds / (24 * 60 * 60 * 1000); // -> (24 days, 60 mins, 60 secs, 1000 milliseconds)
console.log(Math.floor(diffInDays));
console.log(`${Math.floor(diffInDays)} days until new year's eve`);

// epoch Converter

// [6] Write a code to convert days to years, months and days
/* 

*/
let days = 124;

let tahun = Math.floor(days / 365);
let sisa = days % 365;

let bulan = Math.floor(sisa / 30);
let hari = sisa % 30;

console.log(`${tahun} tahun, ${bulan} bulan, ${hari} hari`);

