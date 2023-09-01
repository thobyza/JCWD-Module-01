// [!] Array built-in methods
// > Array Looping methods
let city = ["jakarta", "batam", "bandung", "jogja"]

// looping array forEach
city.forEach((item) => {
  console.log(item);
});

// looping array map
city.map((item) => {
  console.log(item);
});

city.map((item, index) => {
    console.log(`${item} ada di index ke ${index}`);
});

city.map((item, index, array) => {
    console.log(`${item} ada di index ke ${index} dalam array ${array}`);
});

// let plateNum = ["B", "D", "BK", "T"];

// plateNum.map((item, index) => {
//     console.log(`${item} adalah plate ke ${index + 1}`);
// });

// looping array for..of
let fruits = ["apple", "orange", "plum"]
for (const item of fruits) {
    console.log(item);
}

        // same as...
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

