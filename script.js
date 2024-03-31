const body = document.body;
const toggle = document.getElementById("toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const noBtn = document.querySelector(".No-btn");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        body.classList.add("dark");
        sunIcon.classList.remove("active");
        moonIcon.classList.add("active");
    } else {
        body.classList.remove("dark");
        sunIcon.classList.add("active");
        moonIcon.classList.remove("active");
    }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

const yesBtn = document.querySelector(".Yes-btn"); // Corrected class name
yesBtn.addEventListener("click", () => {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    question.innerHTML = "Aaaaaaaaaa, I Like You too!!! :)";
    gif.src = "https://media.tenor.com/PdSA8dcotSsAAAAC/honkai-honkai-star-rail.gif";
    // Hide the "No" button
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});
