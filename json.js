// Javascipt object into JSON > JSON.stringify()
const data = {
    name: "John",
    gender: "male",
    age: 25
}

console.log(JSON.stringify(data));


// JSON into javascript object > JSON.parse()
const text =
    '{ "employess": [' +
    '{ "firstName": "John", "lastName": "Doe"},' +
    '{ "firstName": "Anna", "lastName": "Smith"},' +
    '{ "firstName": "Peter", "lastName": "Jones"} ]}';

console.log(JSON.parse(text));


