// Write a code to find LCM of two numbers → use do … while.

function findLcm(num1, num2) {
    let count = 0;
    let lcm = [];

    do {
        if (num1 % count == 0 && num2 % count == 0) {
            lcm.push(count);
        }
        count++;
    } while (count <= num1 && count <= num2);

    return lcm[1];
}

console.log(findLcm(17,));
