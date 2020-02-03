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

function populate(s1, s2){
  var s1  = document.getElementById(s1);
  var s2  = document.getElementById(s2);
  s2.innerHTML = "";
  if(s1.value == "PT"){
    var optionArray = ["escolha|Escolha um vereador", "leandro lyra | Leandro Lyra"];

  } else if(s1.value == "DEM"){
    var optionArray = ["escolha|Escolha um vereador", "carlos bolsonaro | Carlos Bolsonaro"];

  }
  for(var option in optionArray){
    var pair = optionArray[option] .split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}