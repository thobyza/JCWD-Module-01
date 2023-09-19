
const tryPromise = new Promise((resolve, reject) => {
    let isError = false;
    if (isError) reject("Error")
    else resolve("Success");

});

tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"))


const asyncAwait = async () => {
    console.log("satu");
    await tryPromise
        .then((res) => console.log("Ini kalau sukses"))
        .catch((err) => console.log("Ini kalau error"))
    // .finally(() => console.log("finally done"))
    console.log("dua");
}

asyncAwait();

// syntax 2: with Try and Catch, lecturer prefers it
const tryAndCatch = async () => {
    try {
        let result = await tryPromise;
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

const tryThrow = () => {
    try {
        let isFalse = true;
        if (isFalse) {
            throw "there is an error"
        }
        console.log("success");
    } catch (err) {
        console.log(err);
    }
}

tryThrow();

// [!] Module Exports
const name = "Barb";

const myFunc = (num1, num2) => {
    return num1 * num2
}

module.exports = { myFunc, name };