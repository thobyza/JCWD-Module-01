// [1] your given a number, and check thr following number is prime or no, 
// if prime return true


function primeChecker(number) {
    // Write your code here
    let counter = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            counter++;
        }
    }

    if (counter == 2) {
        return true
    } else {
        return false
    }

    // return counter;


}

console.log(primeChecker(37));