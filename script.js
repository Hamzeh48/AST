const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("checkBtn").addEventListener("click", function() {
  const guess = Number(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "ادخل رقم بين 1 و 100!";
    return;
  }

  if (guess === secretNumber) {
    feedback.textContent = `مبروك! الرقم الصحيح هو ${secretNumber}. حاولت ${attempts} مرات.`;
  } else if (guess < secretNumber) {
    feedback.textContent = "الرقم أكبر!";
  } else {
    feedback.textContent = "الرقم أصغر!";
  }
});
