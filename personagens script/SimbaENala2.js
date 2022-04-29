function SNQuestao2(){
    let SNSegundaQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') //tb = TIMAO E PUMBA// 
    
    if ( SNSegundaQuestao  == "A") {
        location.assign("../gameover.html") //redireciona para uma pasta de documentos ou uma pagina html
    }
    
    else if (SNSegundaQuestao  == "B") {
        location.assign("../gameover.html")
    }
    
    else if (SNSegundaQuestao == "C") { 
        location.assign("../personagens/SimbaENala3.html") 
    }
    
    else 
    {
        alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
    }
    }
    