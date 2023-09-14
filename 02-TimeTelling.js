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

function tellIndonesianTime(time) {
    const [hour, minutes] = time.split(":").map(Number);
    let indonesianHour = hour;
    if (hour > 12) {
        indonesianHour -= 12;
    } else if (hour === 0) {
        indonesianHour = 12;
    }

    if (minutes === 0) {
        return `jam ${indonesianHour}`;
    } else if (minutes >= 1 && minutes <= 14) {
        return `jam ${indonesianHour} lewat ${minutes}`;
    } else if (minutes === 15) {
        return `jam ${indonesianHour} seperempat`;
    } else if (minutes >= 16 && minutes <= 29) {
        return `jam ${indonesianHour} lewat ${minutes}`;
    } else if (minutes === 30) {
        return `jam setengah ${indonesianHour + 1}`;
    } else if (minutes >= 31 && minutes <= 44) {
        return `jam ${indonesianHour + 1} kurang ${60 - minutes}`;
    } else if (minutes === 45) {
        return `jam ${indonesianHour + 1} kurang seperempat`;
    } else if (minutes >= 46 && minutes <= 59) {
        return `jam ${indonesianHour + 1} kurang ${minutes - 60}`;
    }
}

console.log(tellIndonesianTime("00:46"));

