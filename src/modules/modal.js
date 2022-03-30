"use strict";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");
  const screen = window.screen.width;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let count = 0;
      let idInterval;

      modal.style.display = "block";
      popupContent.style.top = -50 + "%";

      const animate = () => {
        count++;
        idInterval = requestAnimationFrame(animate);

        if (count < 25) {
          popupContent.style.top = -45 + count * 3 + "%";
        } else {
          cancelAnimationFrame(idInterval);
        }

        if (screen < 768) {
          modal.style.display = "block";
          popupContent.style.top = 20 + "%";
        }
      };

      animate();
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;