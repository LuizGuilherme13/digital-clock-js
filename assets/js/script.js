const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const clock = setInterval(function time() {
    let now = new Date()
    let hr = now.getHours().toString().padStart(2, '0')
    let min = now.getMinutes().toString().padStart(2, '0')
    let sec = now.getSeconds().toString().padStart(2, '0')

    hours.textContent = hr
    minutes.textContent = min
    seconds.textContent = sec
})