/*
[1] buat function konversi ke template phonenumber (xxx-xxx-xxxx)

example -> '1234567890' = '(123)-456-7890'
*/

// [1]
let newNum = "1234567890";

function phoneConversion(s) {
  let numArr = s.split("");

  for (let i = 0; i < 10; i++) {
    if (i == 0) {
      numArr.splice(i, 0, "(");
    }
    if (i == 4) {
      numArr.splice(i, 0, ")");
    }
    if (i == 5 || i == 9) {
      numArr.splice(i, 0, "-");
    }
  }

  return numArr.join("");
}

console.log(phoneConversion(newNum));

// ** JWbn kak Ilham
function phoneConversion(input) {
  let temp = "(xxx)-xxx-xxxx";

  input.split("").map((item) => {
    temp = temp.replace("x", item);
  });
  return temp;
}

console.log(phoneConversion("0987654321"));

/*
[2] buat class Train
    - masinis duduk dipaling depan
    - maksimal 10 penumpang
    - tidak boleh ada penumpang dengan nama yg sama
    - penumpang mengisi urutan kursi dari depan terlebih dahulu
    - penumpang bisa keluar kereta
    - penumpang baru, mengisi kursi kosong terlebih dahulu 
        sebelum ke kursi belakang
*/

class Train {
  container = ["machinist"];
  maxSize = 10;

  addPassenger(name) {
    if (this.container.length >= this.maxSize) {
      console.log("Train is fully occupied.");
    }
    if (name == "machinist") {
      console.log("machinist is not a passenger.");
    }
    if (this.container.includes(name)) {
      console.log(`${name} is already on the train`);
    }
  }
}
