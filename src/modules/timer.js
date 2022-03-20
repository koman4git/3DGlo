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
        
        timerHours.textContent = ('0'  + getTime.hours).slice(-2)
        timerMinutes.textContent = ('0' + getTime.minutes).slice(-2)
        timerSeconds.textContent = ('0' + getTime.seconds).slice(-2)
        if(getTime.timeRemaining > 0) {
           let idSetInterval = setInterval(() => {
            upDateClock()
           }, 1000) 
        } else if(getTime.timeRemaining = 0) {
            clearInterval(idSetInterval)
        } else {
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
        }
        
    }
    upDateClock()
    // getTimeRamaining()
    
}
export default timer