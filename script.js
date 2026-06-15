/* =========================
   SCREEN FLOW
========================= */

setTimeout(() => {
document.getElementById("loadingScreen").classList.add("hidden");
document.getElementById("unlockScreen").classList.remove("hidden");
}, 2500);

/* =========================
   UNLOCK SCREEN
========================= */

document.getElementById("unlockBtn").addEventListener("click", () => {
document.getElementById("unlockScreen").classList.add("hidden");
document.getElementById("openScreen").classList.remove("hidden");
});

/* =========================
   OPEN SCREEN
========================= */

document.getElementById("openBtn").addEventListener("click", () => {
document.getElementById("openScreen").classList.add("hidden");
document.getElementById("slideScreen").classList.remove("hidden");

startSlideshow();
startHearts();
});

/* =========================
   SLIDESHOW (5 IMAGES)
========================= */

const images = [
"./images/photo1.jpg",
"./images/photo2.jpg",
"./images/photo3.jpg",
"./images/photo4.jpg",
"./images/photo5.jpg"
];

let index = 0;
const img = document.getElementById("slideImg");

function startSlideshow() {
img.src = images[index];

let interval = setInterval(() => {
index++;

if (index < images.length) {
img.style.opacity = 0;

setTimeout(() => {
img.src = images[index];
img.style.opacity = 1;
}, 500);

} else {
clearInterval(interval);
setTimeout(() => {
showFinal();
}, 1500);
}

}, 5000);
}

/* =========================
   FINAL SCREEN
========================= */

function showFinal() {
document.getElementById("slideScreen").classList.add("hidden");
document.getElementById("finalScreen").classList.remove("hidden");
}

/* =========================
   HEARTS
========================= */

function startHearts() {
setInterval(() => {
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (Math.random() * 20 + 10) + "px";

document.body.appendChild(heart);

setTimeout(() => heart.remove(), 6000);

}, 300);
}

/* =========================
   SECRET (5 WORDS ONE BY ONE)
========================= */

const secretWords = [
"You are my peace",
"You are my home",
"You are my dream",
"You are my smile",
"You are my forever"
];

let sIndex = 0;

document.getElementById("secretBtn").addEventListener("click", () => {

document.getElementById("secretOutput").innerHTML =
secretWords[sIndex];

sIndex++;

if (sIndex >= secretWords.length) {
sIndex = 0;
}

});

/* =========================
   YES / NO BUTTON LOGIC
========================= */

document.querySelector(".yes-btn").addEventListener("click", () => {
alert("❤️ Forever starts now ❤️");
});

const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", (e) => {
const x = e.clientX + 40;
const y = e.clientY + 40;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});
