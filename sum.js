function sum(a, b) {
    return a + b;
}

console.log(sum(2, 6)); // manual testing


/*
in terminal:
npm init -y
npm i jest (! wait for this to load, may take some time)
> package.json (line 7: test: ...) change to - "test": "jest --coverage" -
...
npm test
*/

module.exports = { sum }