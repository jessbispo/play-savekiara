/*function utilizada para todas as questões do jogo*/
function recebeRespostas(textoPrompt, respostaCerta, urlCerta, urlErrada) {

    let escolhaUsuario = prompt(textoPrompt)
    let tentativas = 2
    while (tentativas >= 1)
        if (escolhaUsuario.toUpperCase() == respostaCerta.toUpperCase()) {
            location.assign(urlCerta) 
            break;
        }
        else  {
            location.assign(urlErrada)
            break;
    
        }
    } 

    /*função utilizada exclusivamente para escolha de personagens*/
function EscolherPersonagens() { 
    //utilizar onclick no button e adicionar dessa mesma maneira seguindo function x() e a var embaixo
    let EscolhaInicial = prompt('Escolha um personagem:\nTimao e Pumba = 1\nSimba e Nala = 2\nRafiki e Zazu = 3');
    
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
/*function utilizada para o botão de tentar novamente na pagina de derrota e para o botao de jogar novamente na pagina de vitoria*/
function JogarNovamente() {
    location.assign("./index.html")
}
