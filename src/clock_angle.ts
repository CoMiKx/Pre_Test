function getClockAngle(time: string): number {
    const [hourStr, minuteStr] = time.split(":");
    const hour: number = parseInt(hourStr);
    const minute: number = parseInt(minuteStr);
    if( hour >= 0 && hour <= 23 ){
        const hourAngle: number = 0.5 * (hour * 60 + minute);
        const minuteAngle: number = 6 * minute;
        let angle: number = Math.abs(hourAngle - minuteAngle);
        angle = Math.min(angle, 360 - angle);
        return angle;
    } else {
        throw new Error("Wrong time format");
    }
}

// Example usage
const calculatedAngle: number = getClockAngle("09:00");
console.log(getClockAngle("09:00") === 90);
console.log(`the shorter angle between the hour and minute hands of the clock is ${calculatedAngle} degrees.`);
