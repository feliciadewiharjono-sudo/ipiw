document.addEventListener("DOMContentLoaded", () => {

  // REASONS
  const reasons = document.querySelectorAll(".reason");

  reasons.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden");
        item.textContent = item.dataset.text;
      }
    });
  });

  // BUTTON
  const loveBtn = document.querySelector(".love");

  if (loveBtn) {
    loveBtn.addEventListener("click", () => {
      if (loveBtn.dataset.state === "off") {
        loveBtn.textContent = "I love you, idiot.";
        loveBtn.dataset.state = "on";
      } else {
        loveBtn.textContent = "Don't press this";
        loveBtn.dataset.state = "off";
      }
    });
  }

});