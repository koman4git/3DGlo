const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    
    const getTimeRamaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        
        return {timeRemaining, hours, minutes, seconds}
    }    

    const upDateClock = () => {
        let getTime = getTimeRamaining()
        
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds
        if(getTime.timeRemaining > 0) {
            setTimeout(upDateClock, 1000)
        }
        
    }
    upDateClock()
    // getTimeRamaining()
    
}
export default timer