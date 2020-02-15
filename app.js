
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


    nunesAtila.setAttribute('cy', '305'); 
    nunesAtila.setAttribute('cx', '285'); 
    nunesAtila.style.fill = "##033251";

    jairinhoDr.setAttribute('cy', '275'); 
    jairinhoDr.setAttribute('cx', '270'); 
    jairinhoDr.style.fill = "##033251";

    joaoRicardo.setAttribute('cy', '245'); 
    joaoRicardo.setAttribute('cx', '270'); 
    joaoRicardo.style.fill = "##033251";

    felippeJorge.setAttribute('cy', '215'); 
    felippeJorge.setAttribute('cx', '270'); 
    felippeJorge.style.fill = "##033251";

    lucinhaJunior.setAttribute('cy', '305'); 
    lucinhaJunior.setAttribute('cx', '315'); 
    lucinhaJunior.style.fill = "##033251";

    freitasRafael.setAttribute('cy', '275'); 
    freitasRafael.setAttribute('cx', '300'); 
    freitasRafael.style.fill = "##033251";

    fernandesRosa.setAttribute('cy', '245'); 
    fernandesRosa.setAttribute('cx', '300'); 
    fernandesRosa.style.fill = "#033251";

    ribeiroThiago.setAttribute('cy', '215'); 
    ribeiroThiago.setAttribute('cx', '300'); 
    ribeiroThiago.style.fill = "#033251";

    coelhoWilliam.setAttribute('cy', '305'); 
    coelhoWilliam.setAttribute('cx', '345'); 
    coelhoWilliam.style.fill = "#033251";

    costaVeronica.setAttribute('cy', '275');
    costaVeronica.setAttribute('cx', '330');
    costaVeronica.style.fill = "#033251";

    baBa.setAttribute('cy', '245'); 
    baBa.setAttribute('cx', '330'); 
    baBa.style.fill = "#fbe106";

    pauloMarcos.setAttribute('cy', '215'); 
    pauloMarcos.setAttribute('cx', '330'); 
    pauloMarcos.style.fill = "#fbe106";

    brizolaLeonel.setAttribute('cy', '305'); 
    brizolaLeonel.setAttribute('cx', '375'); 
    brizolaLeonel.style.fill = "#fbe106";

    pinheiroPaulo.setAttribute('cy', '275'); 
    pinheiroPaulo.setAttribute('cx', '360'); 
    pinheiroPaulo.style.fill = "#fbe106";
 
    cincoRenato.setAttribute('cy', '245');
    cincoRenato.setAttribute('cx', '360');
    cincoRenato.style.fill = "#fbe106"; 
 
    mottaTarcisio.setAttribute('cy', '215');
    mottaTarcisio.setAttribute('cx', '360');
    mottaTarcisio.style.fill = "#fbe106";

    isquierdoAlexandre.setAttribute('cy', '305');
    isquierdoAlexandre.setAttribute('cx', '405');
    isquierdoAlexandre.style.fill = "#1B80C4";

    maiaCesar.setAttribute('cy', '275');
    maiaCesar.setAttribute('cx', '390');
    maiaCesar.style.fill = "#1B80C4";

    florianoMatheus.setAttribute('cy', '245');
    florianoMatheus.setAttribute('cx', '390');
    florianoMatheus.style.fill = "##1B80C4";

    lupparelliCelio.setAttribute('cy', '215');
    lupparelliCelio.setAttribute('cx', '390');
    lupparelliCelio.style.fill = "#1B80C4";

    filhoLuiz.setAttribute('cy', '215');
    filhoLuiz.setAttribute('cx', '420');
    filhoLuiz.style.fill = "#31a836";

    sicilianoMarcello.setAttribute('cy', '275');
    sicilianoMarcello.setAttribute('cx', '420');
    sicilianoMarcello.style.fill = "#31a836";

    bacanaZico.setAttribute('cy', '245');
    bacanaZico.setAttribute('cx', '420');
    bacanaZico.style.fill = "#31a836";

    bolsonaroCarlos.setAttribute('cy', '275');
    bolsonaroCarlos.setAttribute('cx', '450');
    bolsonaroCarlos.style.fill = "#006f41";

    solidariedadeFatima.setAttribute('cy', '215');
    solidariedadeFatima.setAttribute('cx', '450');
    solidariedadeFatima.style.fill = "#006f41";

    elitusalemMajor.setAttribute('cy', '245');
    elitusalemMajor.setAttribute('cx', '450');
    elitusalemMajor.style.fill = "#006f41";

    kesslerEliseu.setAttribute('cy', '305');
    kesslerEliseu.setAttribute('cx', '435');
    kesslerEliseu.style.fill = "indigo";

    mouraJones.setAttribute('cy', '305');
    mouraJones.setAttribute('cx', '465');
    mouraJones.style.fill = "indigo";

    messinaPaulo.setAttribute('cy', '305');
    messinaPaulo.setAttribute('cx', '495');
    messinaPaulo.style.fill = "indigo";

    arraesAlexandre.setAttribute('cy', '275');
    arraesAlexandre.setAttribute('cx', '480');
    arraesAlexandre.style.fill = "#0080FF";

    adalmirProfessor.setAttribute('cy', '245');
    adalmirProfessor.setAttribute('cx', '480');
    adalmirProfessor.style.fill = "#0080FF";

    bergherTeresa.setAttribute('cy', '215');
    bergherTeresa.setAttribute('cx', '480');
    bergherTeresa.style.fill = "#0080FF";

    ararMarcelo.setAttribute('cy', '305');
    ararMarcelo.setAttribute('cx', '525');
    ararMarcelo.style.fill = "#cc0000";

    roCal.setAttribute('cy', '275');
    roCal.setAttribute('cx', '510');
    roCal.style.fill = "#cc0000";

    ziCo.setAttribute('cy', '245');
    ziCo.setAttribute('cx', '510');
    ziCo.style.fill = "#cc0000";

    silvaInaldo.setAttribute('cy', '215');
    silvaInaldo.setAttribute('cx', '510');
    silvaInaldo.style.fill = "pink";

    jesusJoao.setAttribute('cy', '305');
    jesusJoao.setAttribute('cx', '555');
    jesusJoao.style.fill = "pink";

    bastosTania.setAttribute('cy', '275');
    bastosTania.setAttribute('cx', '540');
    bastosTania.style.fill = "pink";

    novaesLuciana.setAttribute('cy', '245');
    novaesLuciana.setAttribute('cx', '540');
    novaesLuciana.style.fill = "#c4122d";

    reiMont.setAttribute('cy', '215');
    reiMont.setAttribute('cx', '540');
    reiMont.style.fill = "#c4122d";
    
    eduardoCarlos.setAttribute('cy', '305');
    eduardoCarlos.setAttribute('cx', '585');
    eduardoCarlos.style.fill = "#1b1845";

    manaiaJorge.setAttribute('cy', '275');
    manaiaJorge.setAttribute('cx', '570');
    manaiaJorge.style.fill = "#1b1845";

    almeidaMarcelino.setAttribute('cy', '245');
    almeidaMarcelino.setAttribute('cx', '570');
    almeidaMarcelino.style.fill = "#0070c5";

    linsVera.setAttribute('cy', '215');
    linsVera.setAttribute('cx', '570');
    linsVera.style.fill = "pink";

    gilbertoDr.setAttribute('cy', '305');
    gilbertoDr.setAttribute('cx', '615');
    gilbertoDr.style.fill = "#0070c5";

    gomesJair.setAttribute('cy', '275');
    gomesJair.setAttribute('cx', '600');
    gomesJair.style.fill = "#0070c5";

    williamFernando.setAttribute('cy', '245');
    williamFernando.setAttribute('cx', '600');
    williamFernando.style.fill = "#0070c5";

    peTra.setAttribute('cy', '215');
    peTra.setAttribute('cx', '600');
    peTra.style.fill = "#0070c5";

    diasWelington.setAttribute('cy', '275');
    diasWelington.setAttribute('cx', '630');
    diasWelington.style.fill = "#0070c5";

    cibaItalo.setAttribute('cy', '245');
    cibaItalo.setAttribute('cx', '630');
    cibaItalo.style.fill = "#d05f3b";

    lyraLeandro.setAttribute('cy', '215');
    lyraLeandro.setAttribute('cx', '630');
    lyraLeandro.style.fill = "orange";

var slt2 = document.getElementById('select3');

function move(){

  if (slt2.value == "0") {

    nunesAtila.setAttribute('cy', '305'); 
    nunesAtila.setAttribute('cx', '285'); 
    nunesAtila.style.fill = "##033251";

    jairinhoDr.setAttribute('cy', '275'); 
    jairinhoDr.setAttribute('cx', '270'); 
    jairinhoDr.style.fill = "##033251";

    joaoRicardo.setAttribute('cy', '245'); 
    joaoRicardo.setAttribute('cx', '270'); 
    joaoRicardo.style.fill = "##033251";

    felippeJorge.setAttribute('cy', '215'); 
    felippeJorge.setAttribute('cx', '270'); 
    felippeJorge.style.fill = "##033251";

    lucinhaJunior.setAttribute('cy', '305'); 
    lucinhaJunior.setAttribute('cx', '315'); 
    lucinhaJunior.style.fill = "##033251";

    freitasRafael.setAttribute('cy', '275'); 
    freitasRafael.setAttribute('cx', '300'); 
    freitasRafael.style.fill = "##033251";

    fernandesRosa.setAttribute('cy', '245'); 
    fernandesRosa.setAttribute('cx', '300'); 
    fernandesRosa.style.fill = "#033251";

    ribeiroThiago.setAttribute('cy', '215'); 
    ribeiroThiago.setAttribute('cx', '300'); 
    ribeiroThiago.style.fill = "#033251";

    coelhoWilliam.setAttribute('cy', '305'); 
    coelhoWilliam.setAttribute('cx', '345'); 
    coelhoWilliam.style.fill = "#033251";

    costaVeronica.setAttribute('cy', '275');
    costaVeronica.setAttribute('cx', '330');
    costaVeronica.style.fill = "#033251";

    baBa.setAttribute('cy', '245'); 
    baBa.setAttribute('cx', '330'); 
    baBa.style.fill = "#fbe106";

    pauloMarcos.setAttribute('cy', '215'); 
    pauloMarcos.setAttribute('cx', '330'); 
    pauloMarcos.style.fill = "#fbe106";

    brizolaLeonel.setAttribute('cy', '305'); 
    brizolaLeonel.setAttribute('cx', '375'); 
    brizolaLeonel.style.fill = "#fbe106";

    pinheiroPaulo.setAttribute('cy', '275'); 
    pinheiroPaulo.setAttribute('cx', '360'); 
    pinheiroPaulo.style.fill = "#fbe106";
 
    cincoRenato.setAttribute('cy', '245');
    cincoRenato.setAttribute('cx', '360');
    cincoRenato.style.fill = "#fbe106"; 
 
    mottaTarcisio.setAttribute('cy', '215');
    mottaTarcisio.setAttribute('cx', '360');
    mottaTarcisio.style.fill = "#fbe106";

    isquierdoAlexandre.setAttribute('cy', '305');
    isquierdoAlexandre.setAttribute('cx', '405');
    isquierdoAlexandre.style.fill = "#1B80C4";

    maiaCesar.setAttribute('cy', '275');
    maiaCesar.setAttribute('cx', '390');
    maiaCesar.style.fill = "#1B80C4";

    florianoMatheus.setAttribute('cy', '245');
    florianoMatheus.setAttribute('cx', '390');
    florianoMatheus.style.fill = "##1B80C4";

    lupparelliCelio.setAttribute('cy', '215');
    lupparelliCelio.setAttribute('cx', '390');
    lupparelliCelio.style.fill = "#1B80C4";

    filhoLuiz.setAttribute('cy', '215');
    filhoLuiz.setAttribute('cx', '420');
    filhoLuiz.style.fill = "#31a836";

    sicilianoMarcello.setAttribute('cy', '275');
    sicilianoMarcello.setAttribute('cx', '420');
    sicilianoMarcello.style.fill = "#31a836";

    bacanaZico.setAttribute('cy', '245');
    bacanaZico.setAttribute('cx', '420');
    bacanaZico.style.fill = "#31a836";

    bolsonaroCarlos.setAttribute('cy', '275');
    bolsonaroCarlos.setAttribute('cx', '450');
    bolsonaroCarlos.style.fill = "#006f41";

    solidariedadeFatima.setAttribute('cy', '215');
    solidariedadeFatima.setAttribute('cx', '450');
    solidariedadeFatima.style.fill = "#006f41";

    elitusalemMajor.setAttribute('cy', '245');
    elitusalemMajor.setAttribute('cx', '450');
    elitusalemMajor.style.fill = "#006f41";

    kesslerEliseu.setAttribute('cy', '305');
    kesslerEliseu.setAttribute('cx', '435');
    kesslerEliseu.style.fill = "indigo";

    mouraJones.setAttribute('cy', '305');
    mouraJones.setAttribute('cx', '465');
    mouraJones.style.fill = "indigo";

    messinaPaulo.setAttribute('cy', '305');
    messinaPaulo.setAttribute('cx', '495');
    messinaPaulo.style.fill = "indigo";

    arraesAlexandre.setAttribute('cy', '275');
    arraesAlexandre.setAttribute('cx', '480');
    arraesAlexandre.style.fill = "#0080FF";

    adalmirProfessor.setAttribute('cy', '245');
    adalmirProfessor.setAttribute('cx', '480');
    adalmirProfessor.style.fill = "#0080FF";

    bergherTeresa.setAttribute('cy', '215');
    bergherTeresa.setAttribute('cx', '480');
    bergherTeresa.style.fill = "#0080FF";

    ararMarcelo.setAttribute('cy', '305');
    ararMarcelo.setAttribute('cx', '525');
    ararMarcelo.style.fill = "#cc0000";

    roCal.setAttribute('cy', '275');
    roCal.setAttribute('cx', '510');
    roCal.style.fill = "#cc0000";

    ziCo.setAttribute('cy', '245');
    ziCo.setAttribute('cx', '510');
    ziCo.style.fill = "#cc0000";

    silvaInaldo.setAttribute('cy', '215');
    silvaInaldo.setAttribute('cx', '510');
    silvaInaldo.style.fill = "pink";

    jesusJoao.setAttribute('cy', '305');
    jesusJoao.setAttribute('cx', '555');
    jesusJoao.style.fill = "pink";

    bastosTania.setAttribute('cy', '275');
    bastosTania.setAttribute('cx', '540');
    bastosTania.style.fill = "pink";

    novaesLuciana.setAttribute('cy', '245');
    novaesLuciana.setAttribute('cx', '540');
    novaesLuciana.style.fill = "#c4122d";

    reiMont.setAttribute('cy', '215');
    reiMont.setAttribute('cx', '540');
    reiMont.style.fill = "#c4122d";
    
    eduardoCarlos.setAttribute('cy', '305');
    eduardoCarlos.setAttribute('cx', '585');
    eduardoCarlos.style.fill = "#1b1845";

    manaiaJorge.setAttribute('cy', '275');
    manaiaJorge.setAttribute('cx', '570');
    manaiaJorge.style.fill = "#1b1845";

    almeidaMarcelino.setAttribute('cy', '245');
    almeidaMarcelino.setAttribute('cx', '570');
    almeidaMarcelino.style.fill = "#0070c5";

    linsVera.setAttribute('cy', '215');
    linsVera.setAttribute('cx', '570');
    linsVera.style.fill = "pink";

    gilbertoDr.setAttribute('cy', '305');
    gilbertoDr.setAttribute('cx', '615');
    gilbertoDr.style.fill = "#0070c5";

    gomesJair.setAttribute('cy', '275');
    gomesJair.setAttribute('cx', '600');
    gomesJair.style.fill = "#0070c5";

    williamFernando.setAttribute('cy', '245');
    williamFernando.setAttribute('cx', '600');
    williamFernando.style.fill = "#0070c5";

    peTra.setAttribute('cy', '215');
    peTra.setAttribute('cx', '600');
    peTra.style.fill = "#0070c5";

    diasWelington.setAttribute('cy', '275');
    diasWelington.setAttribute('cx', '630');
    diasWelington.style.fill = "#0070c5";

    cibaItalo.setAttribute('cy', '245');
    cibaItalo.setAttribute('cx', '630');
    cibaItalo.style.fill = "#d05f3b";

    lyraLeandro.setAttribute('cy', '215');
    lyraLeandro.setAttribute('cx', '630');
    lyraLeandro.style.fill = "orange";

  } else if (slt2.value == "Sexo") {

    nunesAtila.setAttribute('cy', '410'); 
    nunesAtila.setAttribute('cx', '285'); 
    nunesAtila.style.fill = "#0070c5";

    jairinhoDr.setAttribute('cy', '410'); 
    jairinhoDr.setAttribute('cx', '315'); 
    jairinhoDr.style.fill = "#0070c5";

    joaoRicardo.setAttribute('cy', '410'); 
    joaoRicardo.setAttribute('cx', '345'); 
    joaoRicardo.style.fill = "#0070c5";

    felippeJorge.setAttribute('cy', '410'); 
    felippeJorge.setAttribute('cx', '375'); 
    felippeJorge.style.fill = "#0070c5";

    lucinhaJunior.setAttribute('cy', '380'); 
    lucinhaJunior.setAttribute('cx', '285'); 
    lucinhaJunior.style.fill = "#0070c5";

    freitasRafael.setAttribute('cy', '380'); 
    freitasRafael.setAttribute('cx', '315'); 
    freitasRafael.style.fill = "#0070c5";

    fernandesRosa.setAttribute('cy', '410'); 
    fernandesRosa.setAttribute('cx', '525'); 
    fernandesRosa.style.fill = "pink";

    ribeiroThiago.setAttribute('cy', '380'); 
    ribeiroThiago.setAttribute('cx', '345'); 
    ribeiroThiago.style.fill = "#0070c5";

    coelhoWilliam.setAttribute('cy', '380'); 
    coelhoWilliam.setAttribute('cx', '375'); 
    coelhoWilliam.style.fill = "#0070c5";

    costaVeronica.setAttribute('cy', '410');
    costaVeronica.setAttribute('cx', '555');
    costaVeronica.style.fill = "pink";

    baBa.setAttribute('cy', '350'); 
    baBa.setAttribute('cx', '285'); 
    baBa.style.fill = "#0070c5";

    pauloMarcos.setAttribute('cy', '350'); 
    pauloMarcos.setAttribute('cx', '315'); 
    pauloMarcos.style.fill = "#0070c5";

    brizolaLeonel.setAttribute('cy', '350'); 
    brizolaLeonel.setAttribute('cx', '345'); 
    brizolaLeonel.style.fill = "#0070c5";

    pinheiroPaulo.setAttribute('cy', '350'); 
    pinheiroPaulo.setAttribute('cx', '375'); 
    pinheiroPaulo.style.fill = "#0070c5";
 
    cincoRenato.setAttribute('cy', '320');
    cincoRenato.setAttribute('cx', '285');
    cincoRenato.style.fill = "#0070c5"; 
 
    mottaTarcisio.setAttribute('cy', '320');
    mottaTarcisio.setAttribute('cx', '315');
    mottaTarcisio.style.fill = "#0070c5";

    isquierdoAlexandre.setAttribute('cy', '320');
    isquierdoAlexandre.setAttribute('cx', '345');
    isquierdoAlexandre.style.fill = "#0070c5";

    maiaCesar.setAttribute('cy', '320');
    maiaCesar.setAttribute('cx', '375');
    maiaCesar.style.fill = "#0070c5";

    florianoMatheus.setAttribute('cy', '290');
    florianoMatheus.setAttribute('cx', '285');
    florianoMatheus.style.fill = "#0070c5";

    lupparelliCelio.setAttribute('cy', '290');
    lupparelliCelio.setAttribute('cx', '315');
    lupparelliCelio.style.fill = "#0070c5";

    filhoLuiz.setAttribute('cy', '290');
    filhoLuiz.setAttribute('cx', '345');
    filhoLuiz.style.fill = "#0070c5";

    sicilianoMarcello.setAttribute('cy', '290');
    sicilianoMarcello.setAttribute('cx', '375');
    sicilianoMarcello.style.fill = "#0070c5";

    bacanaZico.setAttribute('cy', '260');
    bacanaZico.setAttribute('cx', '285');
    bacanaZico.style.fill = "#0070c5";

    bolsonaroCarlos.setAttribute('cy', '260');
    bolsonaroCarlos.setAttribute('cx', '315');
    bolsonaroCarlos.style.fill = "#0070c5";

    solidariedadeFatima.setAttribute('cy', '410');
    solidariedadeFatima.setAttribute('cx', '585');
    solidariedadeFatima.style.fill = "pink";

    elitusalemMajor.setAttribute('cy', '260');
    elitusalemMajor.setAttribute('cx', '345');
    elitusalemMajor.style.fill = "#0070c5";

    kesslerEliseu.setAttribute('cy', '260');
    kesslerEliseu.setAttribute('cx', '375');
    kesslerEliseu.style.fill = "#0070c5";

    mouraJones.setAttribute('cy', '230');
    mouraJones.setAttribute('cx', '285');
    mouraJones.style.fill = "#0070c5";

    messinaPaulo.setAttribute('cy', '230');
    messinaPaulo.setAttribute('cx', '315');
    messinaPaulo.style.fill = "#0070c5";

    arraesAlexandre.setAttribute('cy', '230');
    arraesAlexandre.setAttribute('cx', '345');
    arraesAlexandre.style.fill = "#0070c5";

    adalmirProfessor.setAttribute('cy', '230');
    adalmirProfessor.setAttribute('cx', '375');
    adalmirProfessor.style.fill = "#0070c5";

    bergherTeresa.setAttribute('cy', '410');
    bergherTeresa.setAttribute('cx', '615');
    bergherTeresa.style.fill = "pink";

    ararMarcelo.setAttribute('cy', '200');
    ararMarcelo.setAttribute('cx', '285');
    ararMarcelo.style.fill = "#0070c5";

    roCal.setAttribute('cy', '200');
    roCal.setAttribute('cx', '315');
    roCal.style.fill = "#0070c5";

    ziCo.setAttribute('cy', '200');
    ziCo.setAttribute('cx', '345');
    ziCo.style.fill = "#0070c5";

    silvaInaldo.setAttribute('cy', '200');
    silvaInaldo.setAttribute('cx', '375');
    silvaInaldo.style.fill = "#0070c5";

    jesusJoao.setAttribute('cy', '170');
    jesusJoao.setAttribute('cx', '285');
    jesusJoao.style.fill = "#0070c5";

    bastosTania.setAttribute('cy', '380');
    bastosTania.setAttribute('cx', '525');
    bastosTania.style.fill = "pink";

    novaesLuciana.setAttribute('cy', '380');
    novaesLuciana.setAttribute('cx', '555');
    novaesLuciana.style.fill = "pink";

    reiMont.setAttribute('cy', '170');
    reiMont.setAttribute('cx', '315');
    reiMont.style.fill = "#0070c5";
    
    eduardoCarlos.setAttribute('cy', '170');
    eduardoCarlos.setAttribute('cx', '345');
    eduardoCarlos.style.fill = "#0070c5";

    manaiaJorge.setAttribute('cy', '170');
    manaiaJorge.setAttribute('cx', '375');
    manaiaJorge.style.fill = "#0070c5";

    almeidaMarcelino.setAttribute('cy', '140');
    almeidaMarcelino.setAttribute('cx', '285');
    almeidaMarcelino.style.fill = "#0070c5";

    linsVera.setAttribute('cy', '380');
    linsVera.setAttribute('cx', '585');
    linsVera.style.fill = "pink";

    gilbertoDr.setAttribute('cy', '140');
    gilbertoDr.setAttribute('cx', '315');
    gilbertoDr.style.fill = "#0070c5";

    gomesJair.setAttribute('cy', '140');
    gomesJair.setAttribute('cx', '345');
    gomesJair.style.fill = "#0070c5";

    williamFernando.setAttribute('cy', '140');
    williamFernando.setAttribute('cx', '375');
    williamFernando.style.fill = "#0070c5";

    peTra.setAttribute('cy', '110');
    peTra.setAttribute('cx', '285');
    peTra.style.fill = "#0070c5";

    diasWelington.setAttribute('cy', '110');
    diasWelington.setAttribute('cx', '315');
    diasWelington.style.fill = "#0070c5";

    cibaItalo.setAttribute('cy', '110');
    cibaItalo.setAttribute('cx', '345');
    cibaItalo.style.fill = "#0070c5";

    lyraLeandro.setAttribute('cy', '110');
    lyraLeandro.setAttribute('cx', '375');
    lyraLeandro.style.fill = "#0070c5";


  } else if (slt2.value == "Raça/Cor") {

    nunesAtila.setAttribute('cy', '410'); 
    nunesAtila.setAttribute('cx', '240'); 
    nunesAtila.style.fill = "navajowhite";

    jairinhoDr.setAttribute('cy', '410'); 
    jairinhoDr.setAttribute('cx', '270'); 
    jairinhoDr.style.fill = "navajowhite";

    joaoRicardo.setAttribute('cy', '410'); 
    joaoRicardo.setAttribute('cx', '300'); 
    joaoRicardo.style.fill = "navajowhite";

    felippeJorge.setAttribute('cy', '410'); 
    felippeJorge.setAttribute('cx', '330'); 
    felippeJorge.style.fill = "navajowhite";

    lucinhaJunior.setAttribute('cy', '380'); 
    lucinhaJunior.setAttribute('cx', '240'); 
    lucinhaJunior.style.fill = "navajowhite";

    freitasRafael.setAttribute('cy', '380'); 
    freitasRafael.setAttribute('cx', '270'); 
    freitasRafael.style.fill = "navajowhite";

    fernandesRosa.setAttribute('cy', '380'); 
    fernandesRosa.setAttribute('cx', '300'); 
    fernandesRosa.style.fill = "navajowhite";

    ribeiroThiago.setAttribute('cy', '410'); 
    ribeiroThiago.setAttribute('cx', '420'); 
    ribeiroThiago.style.fill = "peru";

    coelhoWilliam.setAttribute('cy', '410'); 
    coelhoWilliam.setAttribute('cx', '450'); 
    coelhoWilliam.style.fill = "peru";

    costaVeronica.setAttribute('cy', '380');
    costaVeronica.setAttribute('cx', '330');
    costaVeronica.style.fill = "navajowhite";

    baBa.setAttribute('cy', '410'); 
    baBa.setAttribute('cx', '480'); 
    baBa.style.fill = "peru";

    pauloMarcos.setAttribute('cy', '350'); 
    pauloMarcos.setAttribute('cx', '240'); 
    pauloMarcos.style.fill = "navajowhite";

    brizolaLeonel.setAttribute('cy', '350'); 
    brizolaLeonel.setAttribute('cx', '270'); 
    brizolaLeonel.style.fill = "navajowhite";

    pinheiroPaulo.setAttribute('cy', '350'); 
    pinheiroPaulo.setAttribute('cx', '300'); 
    pinheiroPaulo.style.fill = "navajowhite";
 
    cincoRenato.setAttribute('cy', '410');
    cincoRenato.setAttribute('cx', '510');
    cincoRenato.style.fill = "peru"; 
 
    mottaTarcisio.setAttribute('cy', '350');
    mottaTarcisio.setAttribute('cx', '330');
    mottaTarcisio.style.fill = "navajowhite";

    filhoLuiz.setAttribute('cy', '320');
    filhoLuiz.setAttribute('cx', '240');
    filhoLuiz.style.fill = "navajowhite";

    sicilianoMarcello.setAttribute('cy', '320');
    sicilianoMarcello.setAttribute('cx', '270');
    sicilianoMarcello.style.fill = "navajowhite";

    bacanaZico.setAttribute('cy', '320');
    bacanaZico.setAttribute('cx', '300');
    bacanaZico.style.fill = "navajowhite";

    isquierdoAlexandre.setAttribute('cy', '320');
    isquierdoAlexandre.setAttribute('cx', '330');
    isquierdoAlexandre.style.fill = "navajowhite";

    maiaCesar.setAttribute('cy', '290');
    maiaCesar.setAttribute('cx', '240');
    maiaCesar.style.fill = "navajowhite";

    florianoMatheus.setAttribute('cy', '290');
    florianoMatheus.setAttribute('cx', '270');
    florianoMatheus.style.fill = "navajowhite";

    lupparelliCelio.setAttribute('cy', '380');
    lupparelliCelio.setAttribute('cx', '420');
    lupparelliCelio.style.fill = "peru";

    bolsonaroCarlos.setAttribute('cy', '290');
    bolsonaroCarlos.setAttribute('cx', '300');
    bolsonaroCarlos.style.fill = "navajowhite";

    solidariedadeFatima.setAttribute('cy', '290');
    solidariedadeFatima.setAttribute('cx', '330');
    solidariedadeFatima.style.fill = "navajowhite";

    elitusalemMajor.setAttribute('cy', '380');
    elitusalemMajor.setAttribute('cx', '450');
    elitusalemMajor.style.fill = "peru";

    kesslerEliseu.setAttribute('cy', '380');
    kesslerEliseu.setAttribute('cx', '480');
    kesslerEliseu.style.fill = "peru";

    mouraJones.setAttribute('cy', '260');
    mouraJones.setAttribute('cx', '240');
    mouraJones.style.fill = "navajowhite";

    messinaPaulo.setAttribute('cy', '260');
    messinaPaulo.setAttribute('cx', '270');
    messinaPaulo.style.fill = "navajowhite";

    arraesAlexandre.setAttribute('cy', '260');
    arraesAlexandre.setAttribute('cx', '300');
    arraesAlexandre.style.fill = "navajowhite";

    adalmirProfessor.setAttribute('cy', '380');
    adalmirProfessor.setAttribute('cx', '510');
    adalmirProfessor.style.fill = "peru";

    bergherTeresa.setAttribute('cy', '260');
    bergherTeresa.setAttribute('cx', '330');
    bergherTeresa.style.fill = "navajowhite";

    ararMarcelo.setAttribute('cy', '230');
    ararMarcelo.setAttribute('cx', '240');
    ararMarcelo.style.fill = "navajowhite";

    roCal.setAttribute('cy', '350');
    roCal.setAttribute('cx', '420');
    roCal.style.fill = "peru";

    ziCo.setAttribute('cy', '230');
    ziCo.setAttribute('cx', '270');
    ziCo.style.fill = "navajowhite";

    silvaInaldo.setAttribute('cy', '230');
    silvaInaldo.setAttribute('cx', '300');
    silvaInaldo.style.fill = "navajowhite";

    jesusJoao.setAttribute('cy', '410');
    jesusJoao.setAttribute('cx', '600');
    jesusJoao.style.fill = "saddlebrown";

    bastosTania.setAttribute('cy', '350');
    bastosTania.setAttribute('cx', '450');
    bastosTania.style.fill = "peru";

    novaesLuciana.setAttribute('cy', '230');
    novaesLuciana.setAttribute('cx', '330');
    novaesLuciana.style.fill = "navajowhite";

    reiMont.setAttribute('cy', '200');
    reiMont.setAttribute('cx', '240');
    reiMont.style.fill = "navajowhite";
    
    eduardoCarlos.setAttribute('cy', '350');
    eduardoCarlos.setAttribute('cx', '480');
    eduardoCarlos.style.fill = "peru";

    manaiaJorge.setAttribute('cy', '350');
    manaiaJorge.setAttribute('cx', '510');
    manaiaJorge.style.fill = "peru";

    almeidaMarcelino.setAttribute('cy', '200');
    almeidaMarcelino.setAttribute('cx', '270');
    almeidaMarcelino.style.fill = "navajowhite";

    linsVera.setAttribute('cy', '200');
    linsVera.setAttribute('cx', '300');
    linsVera.style.fill = "navajowhite";

    gilbertoDr.setAttribute('cy', '200');
    gilbertoDr.setAttribute('cx', '330');
    gilbertoDr.style.fill = "navajowhite";

    gomesJair.setAttribute('cy', '320');
    gomesJair.setAttribute('cx', '420');
    gomesJair.style.fill = "peru";

    williamFernando.setAttribute('cy', '170');
    williamFernando.setAttribute('cx', '240');
    williamFernando.style.fill = "navajowhite";

    peTra.setAttribute('cy', '170');
    peTra.setAttribute('cx', '270');
    peTra.style.fill = "navajowhite";

    diasWelington.setAttribute('cy', '170');
    diasWelington.setAttribute('cx', '300');
    diasWelington.style.fill = "navajowhite";

    cibaItalo.setAttribute('cy', '320');
    cibaItalo.setAttribute('cx', '450');
    cibaItalo.style.fill = "peru";

    lyraLeandro.setAttribute('cy', '170');
    lyraLeandro.setAttribute('cx', '330');
    lyraLeandro.style.fill = "navajowhite";
  }
}






