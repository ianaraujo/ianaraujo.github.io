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
  
  if(s1.value == "Selecionar todos"){
    var optionArray = ["escolha|Escolha um vereador", "Alexandre Arraes | Alexandre Arraes", 
  "Alexandre Isquierdo | Alexandre Isquierdo", "Átila A. Nunes | Átila A. Nunes", "Babá | Babá",
"Carlos Bolsonaro | Carlos Bolsonaro", "Cesar Maia | Cesar Maia", "Dr. Carlos Eduardo | Dr. Carlos Eduardo",
"Dr. Gilberto | Dr. Gilberto", "Dr. Jairinho | Dr. Jairinho", "Dr. João Ricardo | Dr. João Ricardo", 
"Dr. Jorge Manaia | Dr. Jorge Manaia", "Dr. Marcos Paulo | Dr. Marcos Paulo", "Eliseu Kessler | Eliseu Kessler",
"Fátima da Solidariedade | Fátima da Solidariedade", "Fernando William | Fernando William", 
"Inaldo Silva | Inaldo Silva", "Italo Ciba | Italo Ciba", "Jair da Mendes Gomes | Jair da Mendes Gomes",
"João Mendes de Jesus | João Mendes de Jesus", "Jones Moura | Jones Moura", "Jorge Felippe | Jorge Felippe",
"Junior da Lucinha | Junior da Lucinha", "Leandro Lyra | Leandro Lyra", "Leonel Brizola | Leonel Brizola",
"Luciana Novaes | Luciana Novaes", "Luiz Carlos Ramos Filho | Luiz Carlos Ramos Filho", 
"Major Elitusalem | Major Elitusalem", "Marcelino D. Almeida", "Marcello Siciliano | Marcello Siciliano",
"Marcelo Arar | Marcelo Arar", "Matheus Floriano | Matheus Floriano", "Paulo Messina | Paulo Messina",
"Paulo Pinheiro | Paulo Pinheiro", "Petra | Petra", "Prof. Célio Lupparelli | Prof. Célio Lupparelli",
"Professor Adalmir | Professor Adalmir", "Rafael Aloisio Freitas | Rafael Aloisio Freitas", "Reimont | Reimont",
"Renato Cinco | Renato Cinco", "Rocal | Rocal", "Rosa Fernandes | Rosa Fernandes", "Tânia Bastos | Tânia Bastos",
"Tarcísio Motta | Tarcísio Motta", "Teresa Bergher | Teresa Bergher", "Thiago K. Ribeiro | Thigo K. Ribeiro", "Vera Lins | Vera Lins",
"Veronica Costa | Veronica Costa", "Wellington Dias | Wellington Dias", "William Coelho | William Coelho",
"Zico | Zico", "Zico Bacana | Zico Bacana"];

  } else if(s1.value == "PT"){
    var optionArray = ["escolha|Escolha um vereador", "Luciana Novaes | Luciana Novaes", "Reimont | Reimont"];

  } else if(s1.value == "DEM"){
    var optionArray = ["escolha|Escolha um vereador", "Alexandre Isquierdo | Alexandre Isquierdo", "Cesar Maia | Cesar Maia", "Matheus Floriano | Matheus Floriano", "Prof. Célio Lupparelli | Prof. Célio Lupparelli"];

  }
  for(var option in optionArray){
    var pair = optionArray[option] .split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}