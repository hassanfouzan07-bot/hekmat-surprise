document.addEventListener("DOMContentLoaded", () => {

/* ELEMENTS */
const loading = document.getElementById("loadingScreen");
const unlock = document.getElementById("unlockScreen");
const open = document.getElementById("openScreen");
const slide = document.getElementById("slideScreen");
const final = document.getElementById("finalScreen");
const img = document.getElementById("slideImg");

/* STEP 1: LOADING */
setTimeout(() => {
if (loading) loading.classList.add("hidden");
if (unlock) unlock.classList.remove("hidden");
}, 2000);

/* STEP 2: UNLOCK */
document.getElementById("unlockBtn")?.addEventListener("click", () => {
unlock.classList.add("hidden");
open.classList.remove("hidden");
});

/* STEP 3: OPEN */
document.getElementById("openBtn")?.addEventListener("click", () => {
open.classList.add("hidden");
slide.classList.remove("hidden");
startSlideshow();
startHearts();
});

/* SLIDESHOW */
const images = [
"./images/photo1.jpg",
"./images/photo2.jpg",
"./images/photo3.jpg",
"./images/photo4.jpg",
"./images/photo5.jpg"
];

let i = 0;

function startSlideshow() {
if (!img) return;

img.src = images[i];

setInterval(() => {
i++;

if (i < images.length) {
img.style.opacity = 0;

setTimeout(() => {
img.src = images[i];
img.style.opacity = 1;
}, 400);

} else {
slide.classList.add("hidden");
final.classList.remove("hidden");
}

}, 4000);
}

/* HEARTS */
function startHearts() {
setInterval(() => {
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (Math.random() * 20 + 10) + "px";

document.body.appendChild(heart);

setTimeout(() => heart.remove(), 5000);
}, 300);
}

/* SECRET WORDS */
const words = [
"You are my peace",
"You are my home",
"You are my dream",
"You are my smile",
"You are my forever"
];

let w = 0;

document.getElementById("secretBtn")?.addEventListener("click", () => {
document.getElementById("secretOutput").innerText = words[w];
w = (w + 1) % words.length;
});

/* YES BUTTON */
document.querySelector(".yes-btn")?.addEventListener("click", () => {
alert("❤️ Forever starts now ❤️");
});

/* NO BUTTON RUN AWAY */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
document.addEventListener("mousemove", (e) => {
noBtn.style.left = (e.clientX + 20) + "px";
noBtn.style.top = (e.clientY + 20) + "px";
});
}

});
