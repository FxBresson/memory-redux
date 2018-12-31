/**
 * Helper functions
 */

// Number to string - Add a 0 before 1 digit numbers
export const numberToString = (part) => {
    return part < 10 ? "0"+part : part
}

// Render the timer as a string
export const timerToString = (timer) => {
    let s = numberToString(timer % 60)
    let m = numberToString(Math.floor(timer / 60))
    let h = numberToString(Math.floor(timer / 3600))
    return `${h}:${m}:${s}`
}

// Render a time as a string, with milliseconds 
export const timeToString = (time) => {
    let millisecondes = time % 1000;
    let t = timerToString(Math.floor(time / 1000))
    return `${t}::${millisecondes}`
}

// Render a date as a string
export const dateToString = (date) => {
    return new Date(date).toLocaleString('fr-FR');
}