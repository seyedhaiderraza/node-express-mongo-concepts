const currentDate = document.getElementById("date")
let weathercon = document.getElementById("weathercon")
let tempStatus = "Clouds"

const getCurrentDay = () => {
    let currTime = new Date()
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekDays[currTime.getDay()].slice(0, 3)
}

const getCurrentTimeDay = () => {
    let currDate = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = currDate.getDate()

    const time = `${currDate.getHours()>12? currDate.getHours()-12: currDate.getHours()}:${currDate.getMinutes()}${currDate.getHours()>12?'PM':'AM'}`

    const currTime = `${getCurrentDay()} | ${months[currDate.getMonth()].slice(0,3)} ${date} | ${time}`
    return currTime;
}
currentDate.textContent = getCurrentTimeDay()