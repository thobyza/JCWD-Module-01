// Create a function that can create a triangle pattern 
// according to the height we provide like the -following 

// firsthand, let's try creating triangle pattern with "*"

function createTriangle(num) {
    for (let i = 0; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            console.log("*");
        }
        console.log("*");
    }
}

console.log(createTriangle(5));