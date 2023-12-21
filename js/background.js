const images = ["Thomas1.jpg", "Thomas2.jpg", "Thomas3.jpg", "Thomas4.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);
