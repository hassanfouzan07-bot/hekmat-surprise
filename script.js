const terminal = document.getElementById("terminal");
const startBtn = document.getElementById("startBtn");

const lines = [
"تشغيل love.exe...",
"",
"تحميل الذكريات... ████████ 100%",
"تحميل السعادة... ████████ 100%",
"تحميل الضحك... ████████ 100%",
"",
"جاري البحث عن أجمل بنت...",
"",
"تم العثور على المطابقة ❤️",
"",
"الاسم: حكمت",
"الحالة: لا تُعوّض",
"مالكة قلب حسن: تم التأكيد ✓"
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
عزيزتي حكمت،

من بين كل الناس في الدنيا،
بطريقة ما طرقنا اتقابلت.

عدى أكتر من سنة،
وبرضه كل ذكرى لسه حلوة زي الأول.

كل ضحكة،
كل كلام،
كل لحظة مع بعض
بقت جزء من قصة
مش عايز أضيعها.

المشروع الصغير ده مش مجرد كود.

ده طريقتي أحول المشاعر
لحاجة تقدري تشوفيها.

شكرًا إنك جزء من حياتي.

 حكمت ❤️ حسن
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

"❤️ أنتِ الإشعار المفضل عندي.",
"❤️ تم فتح إنجاز: خلتِ حسن يبتسم.",
"❤️ خطأ: مفيش حد أحسن من حكمت.",
"❤️ تم العثور على ذكرى مخفية.",
"❤️ بتخلي الأيام العادية مميزة."

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
"❤️ شكرًا إنك جزء من قصتي يا حكمت ❤️"
);

for(let i=0;i<100;i++){

setTimeout(createHeart,i*40);

}

});
