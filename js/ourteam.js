// Seleciona todos os botões e seções dentro de cada cartão individualmente
document.querySelectorAll(".card").forEach(function(card) {
  var buttons = card.querySelectorAll(".card-buttons button");
  var sections = card.querySelectorAll(".card-section");

  function handleButtonClick(e) {
      var targetSection = e.target.getAttribute("data-section");
      var section = card.querySelector(targetSection);
      if (targetSection !== "#about") {
          card.classList.add("is-active");
      } else {
          card.classList.remove("is-active");
      }
      card.setAttribute("data-state", targetSection);
      sections.forEach(function (s) {
          return s.classList.remove("is-active");
      });
      buttons.forEach(function (b) {
          return b.classList.remove("is-active");
      });
      e.target.classList.add("is-active");
      section.classList.add("is-active");
  }

  buttons.forEach(function (btn) {
      btn.addEventListener("click", handleButtonClick);
  });
});
