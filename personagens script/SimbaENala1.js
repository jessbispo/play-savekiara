function SNQuestao1(){
    let SNPrimeiraQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') 

    if (SNPrimeiraQuestao  == "A") {
        location.assign("../personagens/SimbaENala2.html")  //redireciona para uma pasta de documentos ou uma pagina html
    }
    
    else if (SNPrimeiraQuestao  == "B") {
        location.assign("../gameover.html")
    }
    
    else if (SNPrimeiraQuestao == "C") { 
        location.assign("../gameover.html")
    }
    
    else 
    {
        alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
    }
    }
    