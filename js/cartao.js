const cartaoControllers = document.querySelectorAll("[data-cartao-controller]");

cartaoControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const cartao = e.currentTarget.parentElement.parentElement;
    const isVisible = cartao.dataset.visible;

    if (isVisible === "false") {
      cartao.setAttribute("data-visible", true);
      cartao.classList.add("cartao--visible");
    } else {
      cartao.setAttribute("data-visible", false);
      cartao.classList.remove("cartao--visible");
    }
  });
});
