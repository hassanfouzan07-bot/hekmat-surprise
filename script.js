const questions = [
  "Do you believe in destiny? 💫",
  "Do you think some people are meant to meet? ❤️",
  "Do you smile when you think of me? 😊",
  "Do you feel something special here? 🌍",
  "Will you continue this journey with me? 💍"
];

let index = 0;
window.finalMessageGlobal = "";

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
// NO BUTTON (RUN AWAY 😏)
// =======================
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// =======================
// FINAL SCREEN
// =======================
function showFinalScreen() {
  document.getElementById("app").innerHTML = `
    <h1>❤️ Journey Completed ❤️</h1>
    <p>Now save your love story 💌</p>

    <button onclick="generateLove()">
      💌 Generate Love Summary
    </button>

    <div id="output" style="margin-top:20px;"></div>
  `;
}

// =======================
// GENERATE MESSAGE
// =======================
function generateLove() {

  window.finalMessageGlobal = `
❤️ OUR LOVE JOURNEY SUMMARY ❤️

Dear Hekmat,

From the very beginning, this journey felt different.

Every answer you gave became a small step closer between two hearts.

What started as simple questions slowly turned into something meaningful.

Maybe it was just a website…
but it became a memory worth keeping.

Thank you, Hekmat ❤️

— Hassan
`;

  document.getElementById("output").innerHTML = `
    <p style="
      background:white;
      color:black;
      padding:15px;
      border-radius:10px;
      line-height:1.6;
    ">
      ${window.finalMessageGlobal}
    </p>

    <input id="emailInput" type="email"
      placeholder="Enter your email ❤️">

    <br><br>

    <button onclick="sendEmail()">💌 Send Email</button>
    <button onclick="downloadPDF()">📄 Download PDF</button>
    <button onclick="shareWhatsApp()">📱 WhatsApp Share</button>
  `;
}

// =======================
// EMAIL (SUCCESS MESSAGE FIXED)
// =======================
function sendEmail() {

  const userEmail = document.getElementById("emailInput").value;

  if (!userEmail) {
    alert("Please enter email ❤️");
    return;
  }

  emailjs.send("service_nnc0er7", "template_neqxits", {

    email: userEmail,
    message: window.finalMessageGlobal,
    from_name: "Hassan",
    reply_to: "hassanfouzan07@gmail.com"

  }).then(() => {
    alert("💌 Email submitted successfully!");
  }).catch(err => {
    console.log(err);
    alert("❌ Email failed");
  });
}

// =======================
// PDF (SUCCESS MESSAGE FIXED)
// =======================
function downloadPDF() {

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const cleanText = window.finalMessageGlobal
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "");

  doc.setFontSize(12);
  doc.text("Love Journey - Hekmat", 10, 20);

  const lines = doc.splitTextToSize(cleanText, 180);
  doc.text(lines, 10, 40);

  doc.save("Hekmat_Love_Journey.pdf");

  alert("📄 PDF downloaded successfully!");
}

// =======================
// WHATSAPP (SUCCESS MESSAGE FIXED)
// =======================
function shareWhatsApp() {

  const url = "https://wa.me/?text=" + encodeURIComponent(
    window.finalMessageGlobal + "\n\n❤️ Created by Hassan"
  );

  window.open(url, "_blank");

  alert("📱 WhatsApp opened successfully!");
}
