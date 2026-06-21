const questions = [
  "Do you believe in destiny? 💫",
  "Do you think some people are meant to meet? ❤️",
  "Do you smile when you think of me? 😊",
  "Do you feel something special here? 🌍",
  "Will you continue this journey with me? 💍"
];

let index = 0;

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// =======================
// INIT EMAILJS
// =======================
// ⚠️ Replace this later with your PUBLIC KEY from EmailJS dashboard
emailjs.init("Ax_kppGI5ZZq01auI");

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
// NO BUTTON (RUNS AWAY 😏)
// =======================
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  noBtn.innerText = "Catch me 😏";
});

// =======================
// FINAL SCREEN
// =======================
function showFinalScreen() {
  document.getElementById("app").innerHTML = `
    <h1>❤️ Journey Completed ❤️</h1>
    <p>You didn’t just answer questions… you created something beautiful.</p>

    <button onclick="generateLove()">
      💌 Generate Love Summary
    </button>

    <div id="output" style="margin-top:20px;"></div>
  `;
}

// =======================
// LOVE MESSAGE
// =======================
function generateLove() {

  const finalMessage = `
❤️ OUR LOVE JOURNEY SUMMARY ❤️

Dear Hekmat,

From the very beginning, this journey felt different.

Every answer you gave became a small step closer between two hearts.

What started as simple questions slowly turned into something meaningful — a memory created through emotion and connection.

Maybe it was just a website…
but sometimes even simple things can feel special when shared with the right person.

Thank you, Hekmat ❤️

— Hassan
`;

  document.getElementById("output").innerHTML = `
    <p style="background:white;color:black;padding:15px;border-radius:10px;line-height:1.6;">
      ${finalMessage}
    </p>

    <button onclick="downloadPDF(finalMessage)">
      📄 Download PDF
    </button>

    <button onclick="shareWhatsApp(finalMessage)">
      📱 WhatsApp Share
    </button>

    <button onclick="sendEmail(finalMessage)">
      💌 Send Email
    </button>
  `;
}

// =======================
// PDF DOWNLOAD
// =======================
function downloadPDF(text) {

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(12);
  doc.text("❤️ Love Journey - Hekmat ❤️", 10, 20);

  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 10, 40);

  doc.save("Hekmat_Love_Journey.pdf");
}

// =======================
// WHATSAPP SHARE
// =======================
function shareWhatsApp(text) {

  const url = "https://wa.me/?text=" + encodeURIComponent(
    text + "\n\n❤️ Created with love by Hassan"
  );

  window.open(url, "_blank");
}

// =======================
// EMAILJS SEND (UPDATED WITH YOUR IDs)
// =======================
function sendEmail(finalMessage) {

  emailjs.send("service_nnc0er7", "template_neqxits", {

    email: "hassanfouzan07@gmail.com",   // recipient email
    message: finalMessage,

    from_name: "Hassan",
    reply_to: "hassanfouzan07@gmail.com",
    cc: "",
    bcc: ""

  }).then(() => {
    alert("Email sent successfully ❤️");
  }).catch((err) => {
    console.log("Email error:", err);
    alert("Failed to send email ❌");
  });
}
