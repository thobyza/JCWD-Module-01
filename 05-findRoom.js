
function findFloor(room) {
    // Write your code here
    let lockerPerFloor = [5, 6, 7, 5, 6, 7]
    let floor = 0;
    let i = 0;

    while (room > lockerPerFloor[i % 6]) {
        room -= lockerPerFloor[i % 6];
        i++;
        floor++;
        // console.log(floor);
    }

    floor += Math.ceil(room / 5);
    return floor;
};

console.log(findFloor(49));