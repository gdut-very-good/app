export function formatDate() {
    const now = new Date()
    const year = now.getFullYear()
    const months = now.getMonth() >= 10 ? now.getMonth() : `0${now.getMonth()+1}`
    const day = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`
    const hour = now.getHours() >= 10 ? now.getHours() : `0${now.getHours() }`
    const min = now.getMinutes() >= 10 ?  now.getMinutes() : `0${ now.getMinutes() }`
    return `${year}-${months}-${day} ${hour}:${min}:00`
}

