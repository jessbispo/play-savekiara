function TBquestao3(){
    let TBTerceiraQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') //tb = TIMAO E PUMBA// 
    
    if ( TBTerceiraQuestao  == "A") {
        location.assign("../gameover.html") 
    }
    
    else if (TBTerceiraQuestao  == "B") {
        location.assign("../VITORIA.HTML") 
    }

    else if (TBTerceiraQuestao == "C") { 
        location.assign("../gameover.html")
    }
    
    else 
    {
        alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
    }
    }
    