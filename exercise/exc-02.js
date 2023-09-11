/*  exercise 4
    dataSensor = ["anjing", "babi"]
    input: "budi memberi makan anjing"
    return: "budi memberi makam a****g"

    input2: "babi dan anjing"
    return: "b**i dan a****g"
*/

function sensorWord(input) {
  let dataSensor = ["anjing", "babi"];

  let splitStr = input.split(" ");
  let container = [];

  for (let i = 0; i < splitStr.length; i++) {
    if (dataSensor[0].includes(splitStr[i])) {
      // for "anjing"
      splitStr[i] = "a****g";
      container.push(splitStr[i]);
    } else if (dataSensor[1].includes(splitStr[i])) {
      // for "babi"
      splitStr[i] = "b**i";
      container.push(splitStr[i]);
    } else {
      container.push(splitStr[i]);
    }
  }

  return container.join(" ");
}

console.log(sensorWord("anjing dan babi"));
