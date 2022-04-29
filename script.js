    
function EscolherPersonagens() { //utilizar onclick no button e adicionar dessa mesma maneira seguindo function x() e a var embaixo
    let EscolhaInicial = prompt('Escolha um personagem:\nTimao e Pumba = 1\nSimba e Nala=2\nRafiki e Zazu = 3');

    if (EscolhaInicial == 1) {
        location.assign("../personagens/TimaoEPumba1.html"); //redireciona para uma pasta de documentos ou uma pagina html
    }

    else if (EscolhaInicial == 2) {
        location.assign("../personagens/SimbaENala1.html");
    }

    else if (EscolhaInicial == 3) {
        location.assign("../personagens/RafikiEZazu1.html");
    }

    else {
        alert("Não perca tempo, kiara corre perigo.\nEscolha um personagem JA!");
    }
}