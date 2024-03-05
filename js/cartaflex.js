document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".grid li");
    let currentIndex = 0;

    function showCard(index) {
      cards.forEach((card, idx) => {
        card.classList.remove("active");
        if (idx === index) {
          card.classList.add("active");
        }
      });
    }

    // Show the first card by default
    showCard(currentIndex);

    // Handle next and previous button clicks
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    });

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
    });
  });