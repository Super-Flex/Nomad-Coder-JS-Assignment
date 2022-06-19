const clock = document.querySelector('h2');

function clockmove() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${second}`;
}

console.dir(clock)
clockmove();
setInterval(clockmove, 1000);

