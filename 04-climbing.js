
function climbStair(n) {
    if (n <= 2) {
        return n;
    }

    let step1 = 1;
    let step2 = 2;

    for (let i = 3; i <= n; i++) {
        let curr = step1 + step2;
        step1 = step2;
        step2 = curr;
    }
    return step2;
}

console.log(climbStair(5));