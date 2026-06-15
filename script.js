document.addEventListener("DOMContentLoaded", () => {

/* ELEMENTS */
const loading = document.getElementById("loadingScreen");
const unlock = document.getElementById("unlockScreen");
const open = document.getElementById("openScreen");
const slide = document.getElementById("slideScreen");
const final = document.getElementById("finalScreen");
const img = document.getElementById("slideImg");

/* STEP 1 */
setTimeout(() => {
loading.classList.add("hidden");
unlock.classList.remove("hidden");
}, 2000);

/* STEP 2 */
document.getElementById("unlockBtn").onclick = () => {
unlock.classList.add("hidden");
open.classList.remove("hidden");
};

/* STEP 3 */
document.getElementById("openBtn").onclick = () => {
open.classList.add("hidden");
slide.classList.remove("hidden");
startSlideshow();
};

/* SLIDES */
const images = [
"./images/photo1.jpg",
"./images/photo2.jpg",
"./images/photo3.jpg",
"./images/photo4.jpg",
"./images/photo5.jpg"
];

let i = 0;

function startSlideshow() {
img.src = images[i];

setInterval(() => {
i++;

if (i < images.length) {
img.src = images[i];
} else {
slide.classList.add("hidden");
final.classList.remove("hidden");
}
}, 4000);
}

/* SECRET */
let words = ["You are my peace","You are my home","You are my dream","You are my smile","You are my forever"];
let w = 0;

document.getElementById("secretBtn").onclick = () => {
document.getElementById("secretOutput").innerText = words[w];
w = (w + 1) % words.length;
};

/* YES */
document.querySelector(".yes-btn").onclick = () => {
alert("❤️ Forever starts now ❤️");
};

/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", (e) => {
if (!noBtn) return;

noBtn.style.left = (e.clientX + 20) + "px";
noBtn.style.top = (e.clientY + 20) + "px";
});

});
