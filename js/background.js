const body = document.querySelector('body');

const images = ["1.jpg", "2.jpg", "3.jpg"]

const choseeImage = images[Math.floor(Math.random() * images.length)];

const img = document.createElement('img');

img.src = `image/${choseeImage}`;

document.body.appendChild(img);
