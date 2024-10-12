const nextButton = document.querySelector(".carousel-next");
const prevButton = document.querySelector(".carousel-prev");
const cards = document.querySelector(".testimonial-cards");

nextButton.addEventListener("click", function () {
  cards.append(cards.firstElementChild); // İlk kartı en sona al
  cards.scrollTo({ left: 0, behavior: "smooth" });
});

prevButton.addEventListener("click", function () {
  cards.prepend(cards.lastElementChild); // Son kartı en başa al
  cards.scrollTo({ left: 0, behavior: "smooth" });
});
