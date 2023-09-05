// [!] For..in Loop Object

let person = {
    name: "ricky",
    age: 28,
    address: {
        city: "Bandung",
        country: "Indonesia"
    }
}

// for in

for (const key in person) {
    console.log(person[key]);  // pakai [] bukan dot (.)
}

// const key -> membuat sebuah variable
// yg di dapetin dari key = nama property atau key, bukan value dari key,
//                              utk access value nya, maka pakai []

