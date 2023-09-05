/* object seperti array, tapi setiap value bisa dinamai 
dengan "key" dan lebih complex penyimpanan nya

array -> indexing
object -> key  (key = property)

*/

// [!] creating object
// cara 1
const car = {
  brand: "porshce",
  model: "GT3 rs",
  price: 800000000,
};

const car2 = new Object({
  brand: "audi",    
  model: "rs7",     
  price: 900000000, 
});

// cara 2
console.log(car);
console.log(car2);

// [!] Accessing value of an object
console.log(car.brand);     // cara 1
console.log(car2["brand"]); // cara 2

// [!] Properties & Method
let user = {
    name: "Dave",        // property 
    age: 22,             // property (semua property kecuali method)
    greet() {            // method -> function di dalam object
        console.log("Hello!");
    }
}

user.greet();   // manggil method of an object

// [!] Add & Delete property
user.gender = "male";  // adding property
console.log(user);

user.name = "Wonky";  // changing/update propery
console.log(user);

delete user.greet;
console.log(user);  // delete property

// [!] Optional chaining "?".
let person = {
    name: "ricky",
    age: 28,
    address: {
        city: "Bandung",
        country: "Indonesia"
    }
}

// console.log(person.address.city); // -> error

console.log(person.address?.city);
// -> a safe way to access nested object properties
// logic -> .address ada ngga? kalau ada dilanjut (masuk ke .city), kalau tidak di stop
//                             dan jika tidak ada hasilnya undefined

// [!] Accessing Key
// (properties' name)
// mengakses key di sebuah objek
console.log(Object.keys(person));
console.log(Object.keys(person.address));




