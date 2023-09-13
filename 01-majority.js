/*  source to learn from:
https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-majority-element
https://www.youtube.com/watch?v=bg6r_fgtpMQ
*/


function majorityElement(arr) {
    let candidateMajority = 0;
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidateMajority) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            candidateMajority = arr[i];
            count = 1
        }
    }
    return candidateMajority;
}

console.log(majorityElement([2, 4, 2, 1, 4, 1, 4, 1, 2, 2, 4, 4]));
