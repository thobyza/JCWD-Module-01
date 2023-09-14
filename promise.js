// [!] Promise
// promise state: pending, fulfilled, rejected

const tryPromise = new Promise((resolve, reject) => {
    let isError = false;
    if (isError) reject("Error"); // 
    else resolve("Success")
});

// Example Without Async Await
// const asyncAwait = () => {
//     console.log("satu");
//     tryPromise
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
//         .finally(() => console.log("finally done"))
//     console.log("dua");
// }

// asyncAwait();

// Example with Async Await
// syntax 1: with Then and Catch

const asyncAwait = async () => {
    console.log("satu");
    await tryPromise
        .then((res) => console.log("Ini kalau sukses"))
        .catch((err) => console.log("Ini kalau error"))
    // .finally(() => console.log("finally done"))
    console.log("dua");
}

asyncAwait();


// syntax 2: with Try and Catch
const tryAndCatch = async () => {
    try {
        let result = await tryPromise; // asynchronous
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

tryAndCatch();

// catch nangkep error
// Error Handling: Throw and new Error
const tryThrow = () => {
    try {
        let isFalse = true;
        if (isFalse) {
            throw "there is an Error";
        }
        console.log("success");
    } catch (err) {
        console.log(err);
    }
}

tryThrow();