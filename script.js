const terminal = document.getElementById("terminal");
const startBtn = document.getElementById("startBtn");

const lines = [
"Booting love.exe...",
"",
"Loading memories...",
"Loading happiness...",
"Loading laughter...",
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

});

const letter = `
Dear Hekmat,

Out of all the people in this world,
somehow our paths crossed.

More than a year has passed,
yet every memory still feels special.

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
