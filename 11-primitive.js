/* [11] 
let arr = [1, 'string', null, false, undefined, 2, 'yes', undefined];
Based on the array above write a function 
that will return primitive data types only

--

-> if typeof == true -> add to array push(),

*/

function arrPrimitive(arr) {

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] == "number" ||
      typeof arr[i] == "string" ||
      typeof arr[i] == "undefined" ||
      typeof arr[i] == "boolean" ||
      typeof arr[i] == "null"
    ) {
      newArr.push(arr[i]);
    }
  }

  return console.log(newArr);

}

arrPrimitive([1, "string", null, false, undefined, 2, "yes", undefined, [2]]);

