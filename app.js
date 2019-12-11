const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-link");
  const navLinks = document.querySelectorAll(".nav-link li");

  burguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  // animate links
  navLinks.forEach((link, index) => {
    link.style.animation = "navLinkFade 0.5s ease forwards ${index / 7 + 2}s";
  });
};

navSlide();
