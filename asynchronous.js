// [!] Asynchronous
// Functions running in parallel with other functions
// are called asynchronous

setTimeout(message, 3000); // nunggu 3 detik baru dijalankan (3000 ms -> 3 sec)

function message() {
    console.log("Asynchronous is easy");
}

// [!] Concept example
// Synchronous Example Code
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// Asynchronous Example Code
console.log("Task A");
setTimeout(() => console.log("Task B"), 3000);
console.log("Task C");




