function TBquestao2(){
    let TBSegundaQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') //tb = TIMAO E PUMBA// 
    
    if ( TBSegundaQuestao  == "A") {
        location.assign("../gameover.html") 
    }
    
    else if (TBSegundaQuestao  == "B") {
        location.assign("../personagens/TimaoEPumba3.html") 
    }

    else if (TBSegundaQuestao == "C") { 
        location.assign("../gameover.html")
    }
    
    else 
    {
        alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
    }
    }
    