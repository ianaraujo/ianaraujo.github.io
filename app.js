
function populate(s1, s2){
  var s1  = document.getElementById(s1);
  var s2  = document.getElementById(s2);
  s2.innerHTML = "";
  
  if(s1.value == "Selecionar todos"){
    var optionArray = ["escolha|Escolha um vereador", "Alexandre Arraes|Alexandre Arraes", 
  "Alexandre Isquierdo|Alexandre Isquierdo", "Átila A. Nunes|Átila A. Nunes", "Babá|Babá",
"Carlos Bolsonaro|Carlos Bolsonaro", "Cesar Maia|Cesar Maia", "Dr. Carlos Eduardo|Dr. Carlos Eduardo",
"Dr. Gilberto|Dr. Gilberto", "Dr. Jairinho|Dr. Jairinho", "Dr. João Ricardo|Dr. João Ricardo", 
"Dr. Jorge Manaia|Dr. Jorge Manaia", "Dr. Marcos Paulo|Dr. Marcos Paulo", "Eliseu Kessler|Eliseu Kessler",
"Fátima da Solidariedade|Fátima da Solidariedade", "Fernando William|Fernando William", 
"Inaldo Silva|Inaldo Silva", "Italo Ciba|Italo Ciba", "Jair da Mendes Gomes|Jair da Mendes Gomes",
"João Mendes de Jesus|João Mendes de Jesus", "Jones Moura|Jones Moura", "Jorge Felippe|Jorge Felippe",
"Junior da Lucinha|Junior da Lucinha", "Leandro Lyra|Leandro Lyra", "Leonel Brizola|Leonel Brizola",
"Luciana Novaes|Luciana Novaes", "Luiz Carlos Ramos Filho|Luiz Carlos Ramos Filho", 
"Major Elitusalem|Major Elitusalem", "Marcelino D. Almeida", "Marcello Siciliano|Marcello Siciliano",
"Marcelo Arar|Marcelo Arar", "Matheus Floriano|Matheus Floriano", "Paulo Messina|Paulo Messina",
"Paulo Pinheiro|Paulo Pinheiro", "Petra|Petra", "Prof. Célio Lupparelli|Prof. Célio Lupparelli",
"Professor Adalmir|Professor Adalmir", "Rafael Aloisio Freitas|Rafael Aloisio Freitas", "Reimont|Reimont",
"Renato Cinco|Renato Cinco", "Rocal|Rocal", "Rosa Fernandes|Rosa Fernandes", "Tânia Bastos|Tânia Bastos",
"Tarcísio Motta|Tarcísio Motta", "Teresa Bergher|Teresa Bergher", "Thiago K. Ribeiro|Thigo K. Ribeiro", "Vera Lins|Vera Lins",
"Veronica Costa|Veronica Costa", "Wellington Dias|Wellington Dias", "William Coelho|William Coelho",
"Zico|Zico", "Zico Bacana|Zico Bacana"];

  } else if(s1.value == "PT"){
    var optionArray = ["escolha|Escolha um vereador", "Luciana Novaes|Luciana Novaes", "Reimont|Reimont"];

  } else if(s1.value == "DEM"){
    var optionArray = ["escolha|Escolha um vereador", "Alexandre Isquierdo|Alexandre Isquierdo", "Cesar Maia|Cesar Maia", "Matheus Floriano|Matheus Floriano", "Prof. Célio Lupparelli|Prof. Célio Lupparelli"];

  } 

  for(var option in optionArray){
    var pair = optionArray[option] .split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}

var slt = document.getElementById('select2');

function show(){
  if (slt.value == "Leandro Lyra") {

    document.querySelector("#leandro-lyra").style.visibility = "visible";
    document.querySelector("#leandro-lyra").style.opacity = "1";
  } else {
    document.querySelector("#leandro-lyra").style.visibility = "hidden";
    document.querySelector("#leandro-lyra").style.opacity = "0";
  } 
  
  if(slt.value == "Tarcísio Motta") {
    document.querySelector("#tarcisio-motta").style.visibility = "visible";
    document.querySelector("#tarcisio-motta").style.opacity = "1";
  } else {
    document.querySelector("#tarcisio-motta").style.visibility = "hidden";
    document.querySelector("#tarcisio-motta").style.opacity = "0";
  }
}

const nunesAtila = document.getElementById("nunes-atila");
const jairinhoDr = document.getElementById("jairinho-dr");
const joaoRicardo = document.getElementById("joao-ricardo-dr");
const felippeJorge = document.getElementById("felippe-jorge");
const lucinhaJunior = document.getElementById("lucinha-da-junior");
const freitasRafael = document.getElementById("freitas-rafael");
const fernandesRosa = document.getElementById("fernandes-rosa");
const ribeiroThiago = document.getElementById("ribeiro-thiago");
const coelhoWilliam = document.getElementById("coelho-william");
const baBa = document.getElementById("ba-ba");
const pauloMarcos = document.getElementById("paulo-marcos-dr");
const brizolaLeonel = document.getElementById("brizola-leonel");
const pinheiroPaulo = document.getElementById("pinheiro-paulo");
const cincoRenato = document.getElementById("cinco-renato");
const mottaTarcisio = document.getElementById("motta-tarcisio");
const filhoLuiz = document.getElementById("filho-luiz");
const sicilianoMarcello = document.getElementById("siciliano-marcello");
const bacanaZico = document.getElementById("bacana-zico");
const isquierdoAlexandre = document.getElementById("isquierdo-alexandre");
const maiaCesar = document.getElementById("maia-cesar");
const florianoMatheus = document.getElementById("floriano-matheus");
const lupparelliCelio = document.getElementById("lupparelli-celio-dr");
const bolsonaroCarlos = document.getElementById("bolsonaro-carlos");
const solidariedadeFatima = document.getElementById("solidariedade-fatima");
const elitusalemMajor = document.getElementById("elitusalem-major");
const kesslerEliseu = document.getElementById("kessler-eliseu");
const mouraJones = document.getElementById("moura-jones");
const messinaPaulo = document.getElementById("messina-paulo");
const arraesAlexandre = document.getElementById("arraes-alexandre");
const adalmirProfessor = document.getElementById("adalmir-professor");
const bergherTeresa = document.getElementById("bergher-teresa");
const ararMarcelo = document.getElementById("arar-marcelo");
const roCal = document.getElementById("ro-cal");
const ziCo = document.getElementById("zi-co");
const silvaInaldo = document.getElementById("silva-inaldo");
const jesusJoao = document.getElementById("jesus-joao");
const bastosTania = document.getElementById("bastos-tania");
const novaesLuciana= document.getElementById("novaes-luciana");
const reiMont = document.getElementById("rei-mont");
const eduardoCarlos = document.getElementById("eduardo-carlos-dr");
const manaiaJorge = document.getElementById("manaia-jorge-dr");
const almeidaMarcelino = document.getElementById("almeida-marcelino");
const linsVera = document.getElementById("lins-vera");
const gilbertoDr = document.getElementById("gilberto-dr");
const gomesJair = document.getElementById("gomes-jair");
const williamFernando = document.getElementById("william-fernando");
const peTra = document.getElementById("pe-tra");
const costaVeronica = document.getElementById("costa-veronica");
const diasWelington = document.getElementById("dias-welington");
const cibaItalo = document.getElementById("ciba-italo");
const lyraLeandro = document.getElementById("lyra-leandro");




var slt2 = document.getElementById('select3');

function move(){
  if (slt2.value == "Sexo") {

    nunesAtila.setAttribute('cy', '320'); 
    nunesAtila.setAttribute('cx', '70'); 
    nunesAtila.style.fill = "#0070c5";

    jairinhoDr.setAttribute('cy', '320'); 
    jairinhoDr.setAttribute('cx', '100'); 
    jairinhoDr.style.fill = "#0070c5";

    joaoRicardo.setAttribute('cy', '320'); 
    joaoRicardo.setAttribute('cx', '130'); 
    joaoRicardo.style.fill = "#0070c5";

    felippeJorge.setAttribute('cy', '320'); 
    felippeJorge.setAttribute('cx', '40'); 
    felippeJorge.style.fill = "#0070c5";

    lucinhaJunior.setAttribute('cy', '50'); 
    lucinhaJunior.setAttribute('cx', '40'); 
    lucinhaJunior.style.fill = "#0070c5";

    freitasRafael.setAttribute('cy', '290'); 
    freitasRafael.setAttribute('cx', '40'); 
    freitasRafael.style.fill = "#0070c5";

    fernandesRosa.setAttribute('cy', '320'); 
    fernandesRosa.setAttribute('cx', '260'); 
    fernandesRosa.style.fill = "pink";

    ribeiroThiago.setAttribute('cy', '290'); 
    ribeiroThiago.setAttribute('cx', '100'); 
    ribeiroThiago.style.fill = "#0070c5";

    coelhoWilliam.setAttribute('cy', '290'); 
    coelhoWilliam.setAttribute('cx', '70'); 
    coelhoWilliam.style.fill = "#0070c5";

    baBa.setAttribute('cy', '290'); 
    baBa.setAttribute('cx', '130'); 
    baBa.style.fill = "#0070c5";

    pauloMarcos.setAttribute('cy', '260'); 
    pauloMarcos.setAttribute('cx', '40'); 
    pauloMarcos.style.fill = "#0070c5";

    brizolaLeonel.setAttribute('cy', '260'); 
    brizolaLeonel.setAttribute('cx', '70'); 
    brizolaLeonel.style.fill = "#0070c5";

    pinheiroPaulo.setAttribute('cy', '260'); 
    pinheiroPaulo.setAttribute('cx', '100'); 
    pinheiroPaulo.style.fill = "#0070c5";
 
    cincoRenato.setAttribute('cy', '260');
    cincoRenato.setAttribute('cx', '130');
    cincoRenato.style.fill = "#0070c5"; 
 
    mottaTarcisio.setAttribute('cy', '230');
    mottaTarcisio.setAttribute('cx', '40');
    mottaTarcisio.style.fill = "#0070c5";

    filhoLuiz.setAttribute('cy', '230');
    filhoLuiz.setAttribute('cx', '70');
    filhoLuiz.style.fill = "#0070c5";

    sicilianoMarcello.setAttribute('cy', '230');
    sicilianoMarcello.setAttribute('cx', '100');
    sicilianoMarcello.style.fill = "#0070c5";

    bacanaZico.setAttribute('cy', '230');
    bacanaZico.setAttribute('cx', '130');
    bacanaZico.style.fill = "#0070c5";

    isquierdoAlexandre.setAttribute('cy', '200');
    isquierdoAlexandre.setAttribute('cx', '40');
    isquierdoAlexandre.style.fill = "#0070c5";

    maiaCesar.setAttribute('cy', '200');
    maiaCesar.setAttribute('cx', '70');
    maiaCesar.style.fill = "#0070c5";

    florianoMatheus.setAttribute('cy', '200');
    florianoMatheus.setAttribute('cx', '100');
    florianoMatheus.style.fill = "#0070c5";

    lupparelliCelio.setAttribute('cy', '200');
    lupparelliCelio.setAttribute('cx', '130');
    lupparelliCelio.style.fill = "#0070c5";

    bolsonaroCarlos.setAttribute('cy', '170');
    bolsonaroCarlos.setAttribute('cx', '40');
    bolsonaroCarlos.style.fill = "#0070c5";

    solidariedadeFatima.setAttribute('cy', '320');
    solidariedadeFatima.setAttribute('cx', '290');
    solidariedadeFatima.style.fill = "pink";

    elitusalemMajor.setAttribute('cy', '170');
    elitusalemMajor.setAttribute('cx', '70');
    elitusalemMajor.style.fill = "#0070c5";

    kesslerEliseu.setAttribute('cy', '170');
    kesslerEliseu.setAttribute('cx', '100');
    kesslerEliseu.style.fill = "#0070c5";

    mouraJones.setAttribute('cy', '170');
    mouraJones.setAttribute('cx', '130');
    mouraJones.style.fill = "#0070c5";

    messinaPaulo.setAttribute('cy', '140');
    messinaPaulo.setAttribute('cx', '40');
    messinaPaulo.style.fill = "#0070c5";

    arraesAlexandre.setAttribute('cy', '140');
    arraesAlexandre.setAttribute('cx', '70');
    arraesAlexandre.style.fill = "#0070c5";

    adalmirProfessor.setAttribute('cy', '140');
    adalmirProfessor.setAttribute('cx', '100');
    adalmirProfessor.style.fill = "#0070c5";

    bergherTeresa.setAttribute('cy', '320');
    bergherTeresa.setAttribute('cx', '230');
    bergherTeresa.style.fill = "pink";

    ararMarcelo.setAttribute('cy', '140');
    ararMarcelo.setAttribute('cx', '130');
    ararMarcelo.style.fill = "#0070c5";

    roCal.setAttribute('cy', '110');
    roCal.setAttribute('cx', '40');
    roCal.style.fill = "#0070c5";

    ziCo.setAttribute('cy', '110');
    ziCo.setAttribute('cx', '70');
    ziCo.style.fill = "#0070c5";

    silvaInaldo.setAttribute('cy', '110');
    silvaInaldo.setAttribute('cx', '100');
    silvaInaldo.style.fill = "#0070c5";

    jesusJoao.setAttribute('cy', '110');
    jesusJoao.setAttribute('cx', '130');
    jesusJoao.style.fill = "#0070c5";

    bastosTania.setAttribute('cy', '290');
    bastosTania.setAttribute('cx', '230');
    bastosTania.style.fill = "pink";

    novaesLuciana.setAttribute('cy', '290');
    novaesLuciana.setAttribute('cx', '260');
    novaesLuciana.style.fill = "pink";

    reiMont.setAttribute('cy', '80');
    reiMont.setAttribute('cx', '40');
    reiMont.style.fill = "#0070c5";
    
    eduardoCarlos.setAttribute('cy', '80');
    eduardoCarlos.setAttribute('cx', '70');
    eduardoCarlos.style.fill = "#0070c5";

    manaiaJorge.setAttribute('cy', '80');
    manaiaJorge.setAttribute('cx', '100');
    manaiaJorge.style.fill = "#0070c5";

    almeidaMarcelino.setAttribute('cy', '80');
    almeidaMarcelino.setAttribute('cx', '130');
    almeidaMarcelino.style.fill = "#0070c5";

    linsVera.setAttribute('cy', '290');
    linsVera.setAttribute('cx', '290');
    linsVera.style.fill = "pink";

    gilbertoDr.setAttribute('cy', '50');
    gilbertoDr.setAttribute('cx', '70');
    gilbertoDr.style.fill = "#0070c5";

    gomesJair.setAttribute('cy', '50');
    gomesJair.setAttribute('cx', '100');
    gomesJair.style.fill = "#0070c5";

    williamFernando.setAttribute('cy', '50');
    williamFernando.setAttribute('cx', '130');
    williamFernando.style.fill = "#0070c5";

    peTra.setAttribute('cy', '20');
    peTra.setAttribute('cx', '40');
    peTra.style.fill = "#0070c5";

    costaVeronica.setAttribute('cy', '320');
    costaVeronica.setAttribute('cx', '320');
    costaVeronica.style.fill = "pink";

    diasWelington.setAttribute('cy', '20');
    diasWelington.setAttribute('cx', '70');
    diasWelington.style.fill = "#0070c5";

    cibaItalo.setAttribute('cy', '20');
    cibaItalo.setAttribute('cx', '100');
    cibaItalo.style.fill = "#0070c5";

    lyraLeandro.setAttribute('cy', '20');
    lyraLeandro.setAttribute('cx', '130');
    lyraLeandro.style.fill = "#0070c5";

  }
    if (slt2.value == "0") {
      
    lyraLeandro.setAttribute('cy', '60');
    lyraLeandro.setAttribute('cx', '390');
    lyraLeandro.style.fill = "magenta";
  
  }
}






