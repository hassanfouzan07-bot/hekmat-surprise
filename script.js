const questions = [
  "Do you believe meeting someone can change life? 💫",
  "Do you think some people are meant to stay forever? ❤️",
  "Do you smile when you think of me? 😊",
  "Do you feel comfortable with me around? 🌍",
  "Would you continue this journey with me? 💍"
];

let index = 0;

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let answers = [];

// YES → move forward
yesBtn.addEventListener("click", () => {
  answers.push("Yes ❤️");
  index++;

  if (index < questions.length) {
    questionEl.innerText = questions[index];
  } else {
    showFinal();
  }
});

// NO → escape behavior 😏
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  noBtn.innerText = "Try again 😏";
});

// FINAL SCREEN
function showFinal() {
  document.getElementById("app").innerHTML = `
    <h1>❤️ Journey Completed ❤️</h1>
    <p>You didn’t just answer questions… you created a story with me.</p>

    <button onclick="generateLove()">Generate Final Message 💌</button>

    <div id="output" style="margin-top:20px;"></div>
  `;
}

// FINAL LOVE PARAGRAPH + EMAIL
function generateLove() {

  const message = `
From the moment this journey started, every answer you gave felt like a small step closer between two hearts. 

What began as simple questions turned into something meaningful — a reminder that connections are not always found, sometimes they are built quietly through moments like these.

If you are reading this, it means you chose “Yes” through the journey of emotions, curiosity, and connection. And maybe that “Yes” says more than just a word — maybe it reflects comfort, trust, and something special growing silently.

I don’t know what the future holds, but I do know this moment mattered. And I’m glad you are part of it. ❤️
  `;

  document.getElementById("output").innerHTML = `
    <p style="background:white;color:black;padding:15px;border-radius:10px;">
      ${message}
    </p>
  `;

  sendEmail(message);
}

// EMAIL FUNCTION
function sendEmail(finalMessage) {
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    to_email: "her_email@example.com",
    message: finalMessage
  }).then(() => {
    alert("Love message sent ❤️");
  });
}
