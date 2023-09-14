// [!] Callback 
// adalah function yg dikirim sebagai argumen di function lain
function calculator(a, b, callback) {
    callback(a + b);
}

function displayer(something) {
    console.log(something);
} 0

calculator(5, 13, displayer)

/* When to use callback?
 Where callbacks really shine are in asynchronous functions, 
 where one function has to wait for another function 
 (like waiting for a file to load).
*/

