
const questions = [
  "Do you believe in meaningful connections?",
  "Do you think people can grow closer over time?",
  "Do you enjoy deep conversations?",
  "Do you feel comfort in this interaction?",
  "Would you like to continue this journey?"
];

let index = 0;
let finalMessage = "";

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// =======================
// YES BUTTON
// =======================
yesBtn.addEventListener("click", () => {
  index++;

  if (index < questions.length) {
    questionEl.innerText = questions[index];
  } else {
    showFinalScreen();
  }
});

// =======================
// NO BUTTON MOVES
// =======================
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// =======================
// FINAL SCREEN
// =======================
function showFinalScreen() {
  document.getElementById("app").innerHTML = `
    <h2>Journey Completed</h2>

    <button onclick="generateMessage()">Generate Summary</button>

    <div id="output"></div>
  `;
}

// =======================
// MESSAGE GENERATION
// =======================
function generateMessage() {

  finalMessage = `
LOVE JOURNEY SUMMARY

Dear Hekmat,

From the beginning, this interaction slowly became a meaningful journey.

Each response added value and created a sense of connection.

What started as simple questions turned into a memorable experience.

Thank you for being part of this journey.

Sincerely,
Hassan
`;

  document.getElementById("output").innerHTML = `

    <p style="background:white;color:black;padding:15px;border-radius:8px;">
      ${finalMessage}
    </p>

    <input id="emailInput" type="email" placeholder="Enter email">

    <br><br>

    <button onclick="sendEmail()">Send Email</button>
    <button onclick="downloadPDF()">Download PDF</button>
    <button onclick="shareWhatsApp()">WhatsApp</button>

  `;
}
