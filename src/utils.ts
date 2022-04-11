function addLeadingZero(num: number) {
    return num.toString().padStart(2, "0")
}

function getDate() {
    const date = new Date()

    const hours = addLeadingZero(date.getHours())
    const minutes = addLeadingZero(date.getMinutes())
    const seconds = addLeadingZero(date.getSeconds())

    return `${hours}:${minutes}:${seconds}`
}

export function log(message: string) {
    const date = getDate()
    console.log(`[${date}] ${message}`)
}
