/*
You are given a number, from that number you must convert it 
into Indonesian banknotes in the form of an array.

The fractions used are 100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000. 
Find the fraction from the largest or closest, so the number of fractions is very small.

in the example you get the number 190000, the closest fraction to the 
smallest number of digits is as follows 100000, 75000, 10000, 5000

Your job is to return values in the form of an array


Sample Input 0
74000

Sample Output 0
50000 20000 2000 2000

Sample Input 1
234000

Sample Output 1
100000 100000 20000 10000 2000 2000
*/

let num1 = 74000;

function conversionMoney(number) {
    // write your code here

    const idrFractions = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000];

    let banknotesArr = [];

    for (const item of idrFractions) {
        while (number >= item) {   // 74000 >= 100000
            banknotesArr.push(item);
            number = number - item;
            console.log(banknotesArr);
            console.log(number);
        }
    }

    return banknotesArr;

}

console.log(conversionMoney(num1));
