const starsContainer = document.createElement("div");
starsContainer.className = "stars";
document.body.appendChild(starsContainer);

for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.className = "star";

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = 3 + Math.random() * 5 + "s";
  star.style.animationDelay = Math.random() * 5 + "s";

  starsContainer.appendChild(star);
}