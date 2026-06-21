const questions = [
  "Do you believe in destiny? 💫",
  "Do you think some people are meant to meet? ❤️",
  "Do you smile when you think of me? 😊",
  "Do you feel something special here? 🌍",
  "Will you continue this journey with me? 💍"
];

let index = 0;
let answers = [];

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES BUTTON
yesBtn.addEventListener("click", () => {
  answers.push("Yes ❤️");
  index++;

  if (index < questions.length) {
    questionEl.innerText = questions[index];
  } else {
    showFinal();
  }
});

// NO BUTTON ESCAPE
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// FINAL SCREEN
function showFinal() {
  document.getElementById("app").innerHTML = `
    <h1>❤️ Journey Completed ❤️</h1>
    <p>You’ve created something beautiful with your answers.</p>

    <button onclick="generateLove()">Generate Love Summary 💌</button>

    <div id="output" style="margin-top:20px;"></div>
  `;
}

// GENERATE MESSAGE
function generateLove() {

  const message = `
From the moment this journey started, every answer felt like a step closer between two hearts.

What began as simple questions became a memory — something soft, meaningful, and real.

Maybe this wasn’t just a website… maybe it was a small story we created together ❤️
`;

  document.getElementById("output").innerHTML = `
    <p style="background:white;color:black;padding:15px;border-radius:10px;">
      ${message}
    </p>

    <button onclick="downloadPDF('${encodeURIComponent(message)}')">
      Download PDF 💌
    </button>

    <button onclick="shareWhatsApp('${encodeURIComponent(message)}')">
      Share on WhatsApp 📱
    </button>
  `;

  sendEmail(message);
}

// PDF DOWNLOAD
function downloadPDF(textEncoded) {

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const text = decodeURIComponent(textEncoded);

  doc.setFontSize(12);
  doc.text("❤️ Our Love Journey ❤️", 10, 20);

  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 10, 40);

  doc.save("Love_Journey.pdf");
}

// WHATSAPP SHARE
function shareWhatsApp(textEncoded) {
  const text = decodeURIComponent(textEncoded);

  const url = "https://wa.me/?text=" + encodeURIComponent(text + "\n\n❤️ Created with love");

  window.open(url, "_blank");
}

// EMAIL (EmailJS)
function sendEmail(finalMessage) {

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    to_email: "her_email@example.com",
    message: finalMessage
  }).then(() => {
    console.log("Email sent ❤️");
  }).catch(err => {
    console.log("Email error", err);
  });
}
