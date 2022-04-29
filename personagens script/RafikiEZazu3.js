function RZQuestao3(){
    let RZTerceiraQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') 

    if (RZTerceiraQuestao  == "A") {
        location.assign("../gameover.html")  //redireciona para uma pasta de documentos ou uma pagina html
    }
    
    else if (RZTerceiraQuestao  == "B") {
        location.assign("../VITORIA.html")
    }
    
    else if (RZTerceiraQuestao == "C") { 
        location.assign("../gameover.html")
    }
    
    else 
    {
        alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
    }
    }
    