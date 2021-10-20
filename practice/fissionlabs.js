const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];

var currentDayIndex = 0;
var dayFound = ''
let index = 0
function findDay(jump, day) {
    days.forEach(function (singleDay, index) {
        if (singleDay === day) {
            currentDayIndex = index
        }
    })
    if (currentDayIndex + jump < 7) {
        dayFound = days[currentDayIndex + jump]
        return dayFound;
    } else {
        let store = currentDayIndex + jump;
        while (store >= 7) {
            store -= 7;
        }
        dayFound = days[store]
        return dayFound;
    }
}
console.log(findDay(8, 'wed'));