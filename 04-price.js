let arr = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
    let min = Math.min(...prices);
    let slice = prices.slice(prices.indexOf(min))
    let max = Math.max(...slice);

    return max - min;
}

console.log(maxProfit(arr));


// console.log(arr.slice(4));



