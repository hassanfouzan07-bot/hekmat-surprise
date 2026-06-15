/* =========================
   SAFE START (NO STUCK EVER)
========================= */

document.addEventListener("DOMContentLoaded", () => {

/* =========================
   SCREENS
========================= */

const loadingScreen = document.getElementById("loadingScreen");
const unlockScreen = document.getElementById("unlockScreen");
const openScreen = document.getElementById("openScreen");
const slideScreen = document.getElementById("slideScreen");
const finalScreen = document.getElementById("finalScreen");

/* =========================
   STEP 1: LOADING → UNLOCK
========================= */

setTimeout(() => {
if (loadingScreen) loadingScreen.classList.add("hidden");
if (unlockScreen) unlockScreen.classList.remove("hidden");
}, 2500);

/* =========================
   STEP 2: UNLOCK BUTTON
========================= */

document.getElementById("unlockBtn")?.addEventListener("click", () => {
unlockScreen.classList.add("hidden");
openScreen.classList.remove("hidden");
});

/* =========================
   STEP 3: OPEN BUTTON
========================= */

document.getElementById("openBtn")?.addEventListener("click", () => {
openScreen.classList.add("hidden");
slideScreen.classList.remove("hidden");
startSlideshow();
startHearts();
});

/* =========================
   SLIDESHOW
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
if (!img) return;

img.src = images[index];

const interval = setInterval(() => {
index++;

if (index < images.length) {
img.style.opacity = 0;

setTimeout(() => {
img.src = images[index];
img.style.opacity = 1;
}, 400);

} else {
clearInterval(interval);
setTimeout(showFinal, 1200);
}

}, 5000);
}

/* =========================
   FINAL SCREEN
========================= */

function showFinal() {
slideScreen.classList.add("hidden");
finalScreen.classList.remove("hidden");
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
   SECRET WORDS
========================= */

const secretWords = [
"You are my peace",
"You are my home",
"You are my dream",
"You are my smile",
"You are my forever"
];

let sIndex = 0;

document.getElementById("secretBtn")?.addEventListener("click", () => {
document.getElementById("secretOutput").innerHTML =
secretWords[sIndex];

sIndex++;

if (sIndex >= secretWords.length) sIndex = 0;
});

/* =========================
   BUTTONS
========================= */

document.querySelector(".yes-btn")?.addEventListener("click", () => {
alert("❤️ Forever starts now ❤️");
});

/* NO BUTTON RUN AWAY (SAFE) */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
document.addEventListener("mousemove", (e) => {
const x = e.clientX + 40;
const y = e.clientY + 40;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});
}

});
