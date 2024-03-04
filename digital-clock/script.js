function updateClock() {

    // const now = new Date()
    // let hours = now.getHours()
    // const meridiem = hours >= 12 ? "PM" : "AM"
    // hours = hours % 12 || 12 
    // hours = hours.toString()
    // let minutes = now.getMinutes.toString()
    // let seconds = now.getSeconds.toString()
    // const timeString = `${hours}:${minutes}:${seconds}`
    // document.getElementById("clock").textContent = timeString

    const now = new Date()
    const hours = now.getHours().toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0)
    const seconnds = now.getSeconds().toString().padStart(2,0)
    const timeString = `${hours} : ${minutes} : ${seconnds}`
    document.getElementById("clock").textContent = timeString
}

updateClock()
setInterval(updateClock,1000)