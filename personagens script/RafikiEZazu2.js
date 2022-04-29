function RZQuestao2(){
    let RZSegundaQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') 

    if (RZSegundaQuestao  == "A") {
        location.assign("../gameover.html")  //redireciona para uma pasta de documentos ou uma pagina html
    }
    
    else if (RZSegundaQuestao  == "B") {
        location.assign("../personagens/RafikiEZazu3.html")
    }
    
    else if (RZSegundaQuestao == "C") { 
        location.assign("../gameover.html")
    }
    
    else 
    {
        alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
    }
    }
    