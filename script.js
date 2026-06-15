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

/* SECRET MESSAGE */
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

/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
const x = Math.random() * (window.innerWidth - 150);
const y = Math.random() * (window.innerHeight - 100);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});

/* YES BUTTON EFFECT */
document.querySelector(".yes-btn").addEventListener("click", () => {
alert("❤️ You just made my universe complete ❤️");
});

/* FLOATING HEARTS */
function startHearts() {
setInterval(() => {
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = Math.random() * 20 + 10 + "px";

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 6000);

}, 300);
}
