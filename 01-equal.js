
const student1 = {
    name: "Ahmad",
    age: 24,
    
}
const student2 = {
    name: "Ahmad",
    age: 24,    
}


function areEqual(obj1, obj2) {

    let keysObj1 = Object.keys(obj1);  // ["name", "age"]
    let keysObj2 = Object.keys(obj2);


    for (const keys of keysObj2) {
        return keys;
    }

    // return keysObj1


}

console.log(areEqual(student1, student2));

