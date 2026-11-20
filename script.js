document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const question = item.querySelector(".question");

    question.addEventListener("click", function () {
      faqItems.forEach(function (subItem) {
        if (subItem !== item) {
          subItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
});
