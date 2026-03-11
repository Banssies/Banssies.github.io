document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    revealItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 80) {
        item.classList.add("show");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});