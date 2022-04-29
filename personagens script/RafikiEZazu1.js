function RZQuestao1(){
    let RZPrimeiraQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') 

    if (RZPrimeiraQuestao  == "A") {
        location.assign("../gameover.html")  //redireciona para uma pasta de documentos ou uma pagina html
    }
    
    else if (RZPrimeiraQuestao  == "B") {
        location.assign("../gameover.html")
    }
    
    else if (RZPrimeiraQuestao == "C") { 
        location.assign("../personagens/RafikiEZazu2.html")
    }
    
    else 
    {
        alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
    }
    }
    