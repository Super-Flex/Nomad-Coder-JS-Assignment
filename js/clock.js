const clock = document.querySelector('h2');

function clockmove() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${second}`;
}

console.dir(clock)
clockmove();
setInterval(clockmove, 1000);

