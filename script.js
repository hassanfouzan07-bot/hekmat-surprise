const terminal = document.getElementById("terminal");
const startBtn = document.getElementById("startBtn");

const lines = [
"Booting love.exe...",
"",
"Loading memories... ████████ 100%",
"Loading happiness... ████████ 100%",
"Loading laughter... ████████ 100%",
"",
"Searching for the most beautiful girl...",
"",
"Match Found ❤️",
"",
"Name: Hekmat",
"Status: Irreplaceable",
"Owner of Hassan's heart: Confirmed ✓"
];

let i = 0;

function typeTerminal(){

if(i < lines.length){

terminal.innerHTML += lines[i] + "\n";

i++;

setTimeout(typeTerminal,600);

}else{

startBtn.style.display="block";

}

}

typeTerminal();

startBtn.addEventListener("click",()=>{

document.getElementById("terminal-screen").style.display="none";

document.getElementById("mainContent").classList.remove("hidden");

typeLetter();

setInterval(createHeart,700);

});

const letter = `
Dear Hekmat,

Out of all the people in this world,
somehow our paths crossed.

More than a year has passed,
yet every memory still feels special.

Every laugh,
every conversation,
every moment together
has become part of a story
I never want to lose.

This little project isn't just code.

It's my way of turning feelings
into something you can see.

Thank you for being part of my life.

❤️ Hassan
`;

function typeLetter(){

let x = 0;

const area = document.getElementById("typingText");

function write(){

if(x < letter.length){

area.innerHTML += letter.charAt(x);

x++;

setTimeout(write,40);

}

}

write();

}

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "vw";

heart.style.fontSize =
(20 + Math.random()*20) + "px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

const messages = [

"❤️ You are my favorite notification.",
"❤️ Achievement unlocked: Making Hassan smile.",
"❤️ Error: Nobody better than Hekmat found.",
"❤️ Hidden Memory Found.",
"❤️ You make ordinary days feel special."

];

function showSecret(){

const random =
messages[Math.floor(Math.random()*messages.length)];

document.getElementById("secretMessage").innerHTML =
random;

}

const noBtn =
document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

const x =
Math.random()*(window.innerWidth-150);

const y =
Math.random()*(window.innerHeight-100);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});

document
.querySelector(".yes-btn")
.addEventListener("click",()=>{

alert(
"❤️ Thank you for being part of my story, Hekmat ❤️"
);

for(let i=0;i<100;i++){

setTimeout(createHeart,i*40);

}

});
