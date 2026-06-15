// TERMINAL
const terminalText = [
"Booting emotional system...",
"Loading love protocol ❤️",
"Connecting Hassan → Hekmat...",
"Decrypting memories...",
"System Ready 💖"
];

let i = 0;
let terminal = document.getElementById("terminal");
let startBtn = document.getElementById("startBtn");

function typeTerminal() {
if (i < terminalText.length) {
terminal.innerHTML += terminalText[i] + "\n";
i++;
setTimeout(typeTerminal, 1200);
} else {
startBtn.style.display = "block";
}
}

typeTerminal();

/* START EXPERIENCE */
startBtn.addEventListener("click", () => {
document.getElementById("terminal-screen").style.display = "none";
document.getElementById("mainContent").classList.remove("hidden");

document.getElementById("bgMusic").play();
typeLetter();
startHearts();
});

/* LOVE LETTER */
const message = 
"Hekmat ❤️\n\nIf love had a language, mine would always speak your name.\nEvery moment with you feels like home.\n\n— Hassan";

let j = 0;
function typeLetter() {
let el = document.getElementById("typingText");

let interval = setInterval(() => {
if (j < message.length) {
el.innerHTML += message[j];
j++;
} else {
clearInterval(interval);
}
}, 50);
}

/* SECRET */
function showSecret() {
const messages = [
"You are my favorite notification ❤️",
"Memory unlocked: You = Happiness",
"System error: No one like you found 💖",
"You are my safest place"
];

document.getElementById("secretMessage").innerHTML =
messages[Math.floor(Math.random() * messages.length)];
}

/* YES BUTTON */
document.querySelector(".yes-btn").addEventListener("click", () => {
alert("❤️ You just made my universe complete ❤️");
});

/* NO BUTTON (SAFE MOVE) */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

const padding = 100;

const maxX = window.innerWidth - noBtn.offsetWidth - padding;
const maxY = window.innerHeight - noBtn.offsetHeight - padding;

const x = Math.max(20, Math.random() * maxX);
const y = Math.max(20, Math.random() * maxY);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});

/* HEARTS */
function startHearts() {
setInterval(() => {
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (Math.random() * 20 + 10) + "px";
heart.style.color = "#ff4081";
heart.style.animation = "floatUp 6s linear forwards";

document.body.appendChild(heart);

setTimeout(() => heart.remove(), 6000);

}, 300);
}

/* MEMORY SLIDESHOW */
const images = [
"./images/photo1.jpg",
"./images/photo2.jpg",
"./images/photo3.jpg",
"./images/photo4.jpg",
"./images/photo5.jpg"
];

let currentIndex = 0;

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const startGalleryBtn = document.getElementById("startGalleryBtn");

/* FIX: attach after DOM exists */
document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("startGalleryBtn");

btn.addEventListener("click", () => {
viewer.classList.remove("hidden");
currentIndex = 0;
viewerImg.src = images[currentIndex];
});
});

/* NEXT IMAGE ON CLICK */
document.getElementById("viewer").addEventListener("click", () => {
currentIndex++;

if (currentIndex < images.length) {

viewerImg.style.opacity = 0;

setTimeout(() => {
viewerImg.src = images[currentIndex];
viewerImg.style.opacity = 1;
}, 200);

} else {
viewer.classList.add("hidden");
alert("💖 End of our memories ❤️");
}
});
