// function idTimeTelling(time) {
//     // Write your code here
//     time = time.split(":");
//     let result = "";

//     if (time[0] > 12) {
//         time[0] = time[0] - 12;
//     } else if (time[0] === "00") {
//         time[0] = "12";
//     }

//     if (time[0] === "12") {
//         result += `jam 12`
//     } else if (time[1] === "00") {
//         result += `jam ${time[0]}`;
//     } else if (time[1] >= "01" && time[1] <= "14") {
//         result += `jam ${time[0]} lewat 10`;
//     } else if (time[1] === "15") {
//         result += `jam ${time[0]} seperempat`
//     } else if (time[1] >= "16" && time[1] <= "29") {
//         result += `jam ${time[0]} lewat ${time[1]}`
//     } else if (time[1] === "30") {
//         result += `jam setengah ${time[0] + 1}`
//     } else if (time[1] >= "31" && time[1] <= "44") {
//         result += `jam ${time[0] + 1} kurang ${60 - time[1]}`
//     } else if (time[1] === "45") {
//         result += `jam ${time[0] + 1} kurang seperempat`
//     } else if (time[1] >= "46" && time[1] <= "59") {
//         result += `jam ${time[0] + 1} kurang 10`
//     }

//     return result;
// }

// console.log(idTimeTelling("00:46"));

// function convertToIndonesianTime(time) {
//     let [hours, minutes] = time.split(':').map(Number);
//     if (hours === 0) {
//         hours = 12;
//     }
//     if (hours > 12) {
//         hours -= 12;
//     }

//     minutes = parseInt(minutes);
//     if (minutes === 0) {
//         return `jam ${hours}`;
//     } else if (minutes <= 14 || (16 <= minutes && minutes <= 29)) {
//         return `jam ${hours} lewat ${minutes}`;
//     } else if (minutes === 15) {
//         return `jam ${hours} seperempat`;
//     } else if (minutes === 30) {
//         return `jam setengah ${hours + 1}`;
//     } else if (minutes <= 44 || (46 <= minutes && minutes <= 59)) {
//         return `jam ${hours + 1} kurang ${60 - minutes}`;
//     } else if (minutes === 45) {
//         return `jam ${hours + 1} kurang seperempat`;
//     }
// }

// console.log(convertToIndonesianTime("00:46"));