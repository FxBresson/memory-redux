export const timepartToString = (part) => {
    return part < 10 ? "0"+part : part
}

export const timerToString = (timer) => {
    let s = timepartToString(timer % 60)
    let m = timepartToString(Math.floor(timer / 60))
    let h = timepartToString(Math.floor(timer / 3600))
    return `${h}:${m}:${s}`
}

export const timeToString = (time) => {
    let millisecondes = time % 1000;
    let t = timerToString(Math.floor(time / 1000))
    return `${t}::${millisecondes}`
}

export const dateToString = (date) => {
    return new Date(date).toLocaleString('fr-FR');
}