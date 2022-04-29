function SNQuestao3(){
    let SNTerceiraQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') //tb = TIMAO E PUMBA// 
    
    if ( SNTerceiraQuestao  == "A") {
        location.assign("../gameover.html") //redireciona para uma pasta de documentos ou uma pagina html
    }
    
    else if (SNTerceiraQuestao  == "B") {
        location.assign("../gameover.html")
    }
    
    else if (SNTerceiraQuestao == "C") { 
        location.assign("../VITORIA.HTML") 
    }
    
    else 
    {
        alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
    }
    }
    