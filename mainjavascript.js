
function show_info1(id){
    exibir();
    alteraImagem(id);

    if(id == "intz")
        document.getElementById("x").innerHTML = "A INTZ entrou nos e-Sports em junho de 2014. Desde então, com 1 título em 2015, 2 em 2016, 1 em 2019 e seu último em 2020, a equipe intrépida é pentacampeã do CBLOL."
    else if(id == "pain")
        document.getElementById("x").innerHTML = "A PAIN Gamning é uma das equipes mais antigas do cenário, surgindo no primeiro CBLOL na BGS DE 2012. Era também, quem possuia uma das maiores torcidas, até então... A Pain é bicampeã do CBLOL, sendo os títulos conquistados em 2013 e 2015."
    else if(id == "cruz")
        document.getElementById("x").innerHTML = "O Cruzeiro eSports, time que veio do futebol brasileiro, terá sua estréia no CBLOL 2021. No entanto, está chegando com grandes promessas e com um bom investimento."
    else if(id == "red")
        document.getElementById("x").innerHTML = "A Red Canids, um dia INTZ Red, entrou para o cenário como Red Canids em 2016, jogando o CBLOL e quase sendo rebaixada naquele ano. Alguns meses depois, no primeiro semetre de 2017 e com o \"Dream Team\", venceu o CBLOL."
    else if(id == "furia")
        document.getElementById("x").innerHTML = "A Furia, já conhecida nos outros eSports, entrou em 2020 para o cenário competitivo e faturou uma 4 posição. É também uma grande promessa para o CBLOL 2021."
    else
        ocultar();
}

function show_info2(id){
    exibir2();
    alteraImagem2(id);

    if(id == "fla")
        document.getElementById("y").innerHTML = "O Flamengo eSports, gigante do futebol, entrou para o cenário em 2018, indo do antigo circuito desafiante, até a final do CBLOL naquele ano. A equipe, sempre com grande investimento, bateu na trave mais de uma vez, mas conseguiu conquistar seu título em setembro de 2019."
    else if(id == "loud")
        document.getElementById("y").innerHTML = "A Loud, uma gigante do Freefire, estará estreiando no CBLOL 2021. Com uma emorme torcida e um gigante investimento, a Loud chegou como um dos maiores times de 2021 e é com certeza uma grande promessa."
    else if(id == "kabm")
        document.getElementById("y").innerHTML = "A Kabum, uma das antigas equipes do CBLOL, entrou em 2014 no cenário e no final daquele ano conquistou seu primeiro título do CBLOL. Desde então, com seus altos e baixos, após 3 anos sem muita esperança, em 2018 conquistou 2 títulos e dominou o CBLOL naquele ano. No início de 2020, a equipe consagrou seu tetracampeonato do CBLOL."
    else if(id == "rens")
        document.getElementById("y").innerHTML = "A Rensga, a única equipe fora do eixo sul-sudeste, ficou muito conhecida em 2020 nas redes sociais e conseguiu sua vaga no CBLOL 2021 onde fará sua estréia no cenário competitivo."
    else if(id == "vorx")
        document.getElementById("y").innerHTML = "A Vorax cujo surgimento veio da fusão de duas equipes passadas, PRG e Falkol, fará a sua estrei no CBLOL 2021. No entanto, com a combinação dessas duas equipes e com a experiência, ela é uma grande promessa para esse ano."
    else
        ocultar2();
}

function exibir(){
    //Sumir fundo
    document.getElementById("blk1").style.display = "none";
    document.getElementById("x").style.display = "block";
}

function alteraImagem(id){
    var image = document.getElementById("photoL");
    image.style.display = "block";
    image.innerHTML = "<img class=\"imagem\" src=\"C:/Users/joaow/Desktop/imagens/" + id + ".png\">";
}

function ocultar(){
    //Reaparecer fundo
    document.getElementById("blk1").style.display = "block";
    document.getElementById("x").style.display = "none";
    document.getElementById("photoL").style.display = "none";
}


function exibir2(){
    //Sumir fundo
    document.getElementById("blk2").style.display = "none";
    document.getElementById("y").style.display = "block";
}

function alteraImagem2(id){
    var image = document.getElementById("photoR");
    image.style.display = "block";
    image.innerHTML = "<img class=\"imagem\" src=\"C:/Users/joaow/Desktop/imagens/" + id + ".png\">";
}

function ocultar2(){
    //Reaparecer fundo
    document.getElementById("blk2").style.display = "block";
    document.getElementById("y").style.display = "none";
    document.getElementById("photoR").style.display = "none";
}
























function redirect(){
    //window.open("https://www.google.com");
    window.location.href = "https://www.google.com";
}

function trade(x){
    x.innerHTML = "JONNYCANABRABA";
    //document.getElementById(x).innerHTML = "JONNYCANABRABA";
}

function back(x){
    x.innerHTML = "joaowudarski@gmail.com";
    //document.getElementById(x).innerHTML = "joaowudarski@gmail.com";
}

