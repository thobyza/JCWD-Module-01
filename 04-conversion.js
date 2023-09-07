/*
You are given a number, from that number you must convert it 
into Indonesian banknotes in the form of an array.

The fractions used are 100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000. 
Find the fraction from the largest or closest, so the number of fractions is very small.

in the example you get the number 190000, the closest fraction to the 
smallest number of digits is as follows 100000, 75000, 10000, 5000

Your job is to return values in the form of an array
*/

let num1 =  74000;


function conversionMoney(number) {
    // Write your code here
    const idrFractions = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000];
    let resultArr = [];

    for (let i = 0; i < idrFractions.length; i++) {
        let fractions = idrFractions[i];
        if(number >= fractions) {
            let count = Math.floor(number / fractions);
            resultArr.push(fractions);
            number = number - count * fractions
        }
    }

    return resultArr;

}

console.log(conversionMoney(num1));

