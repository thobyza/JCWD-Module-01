// [!] While Loop
let i = 0;
while (i <= 3) {
  console.log(`Hello ke ${i}!`);
  i++;
}

// [!] Do... While Loop
let c = 0;

do {
    console.log(`Hello ke ${c} do while`);
    c++;
} while (c < 3);

// While with break
let sum = 0;

while (true) {
  if (sum === 5) break;
  console.log(sum);
  sum++;
}

