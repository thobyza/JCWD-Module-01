


function printPattern(n) {

    for (let i = 0; i <= n; i++) {
        let res = ""
        for (let j = 0; j < i; j++) {
            res += "*"
        }
        res += "*"
        console.log(res);
    }
}

console.log(printPattern(5));


function printPatternNum(n) {
    let counter = 0;

    for (let i = 1; i <= n; i++) {
        let res = ""
        for (let j = 1; j < i; j++) {
            counter++;
            res += ` ${counter < 10 ? "0" : ""}${counter}`
        }
        console.log(res);
    }
}

console.log(printPatternNum(5));