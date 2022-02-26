let raceNumber = Math.floor(Math.random() * 1000);
var runnerEarly = false
var runnerAge = 34

if (runnerEarly === true && runnerAge > 18) {
    raceNumber = (raceNumber + 1000)
} else {
    null
}

if (runnerAge > 18 && runnerEarly === true) {
    console.log(`You will race at 9:30, your number is ${raceNumber}`)
} else if (runnerAge > 18 && runnerEarly === false) {
    console.log(`You will race at 11:00, your number is ${raceNumber}`)
} else if (runnerAge < 18)
console.log(`Youth Registrants run at 12:30(regardless of registration), your number is ${raceNumber}`)
