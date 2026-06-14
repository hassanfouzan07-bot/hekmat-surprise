function showSecret() {

const messages = [
"❤️ You are my favorite notification.",
"❤️ Achievement unlocked: Making Hassan smile.",
"❤️ Error: Nobody better than Hekmat found.",
"❤️ Hidden Memory Found.",
"❤️ You make ordinary days feel special."
];

const random =
messages[Math.floor(Math.random() * messages.length)];

document.getElementById("secretMessage").innerHTML = random;

}

document.addEventListener("DOMContentLoaded", () => {

const noBtn = document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseover", () => {

const x = Math.random() * (window.innerWidth - 150);
const y = Math.random() * (window.innerHeight - 100);

noBtn.style.position = "fixed";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

});

}

const yesBtn = document.querySelector(".yes-btn");

if(yesBtn){

yesBtn.addEventListener("click", () => {

alert("❤️ Thank you for being part of my story, Hekmat ❤️");

});

}

});
