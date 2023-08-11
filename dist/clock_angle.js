"use strict";
function getClockAngle(hh_mm) {
    const [hourStr, minuteStr] = hh_mm.split(":");
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    if (hour >= 0 && hour <= 23) {
        const hourAngle = 0.5 * (hour * 60 + minute);
        const minuteAngle = 6 * minute;
        let angle = Math.abs(hourAngle - minuteAngle);
        angle = Math.min(angle, 360 - angle);
        return angle;
    }
    else {
        throw new Error("Wrong time format");
    }
}
// Example usage
const calculatedAngle = getClockAngle("17:30");
console.log(getClockAngle("09:00") === 90);
console.log(`the shorter angle between the hour and minute hands of the clock is ${calculatedAngle} degrees.`);
