function TBquestao1(){
let TBPrimeiraQuestao = prompt('Escolha uma alternativa (em letra maiuscula):\nA\nB\nC') //tb = TIMAO E PUMBA// 

if ( TBPrimeiraQuestao  == "A") {
    location.assign("../gameover.html") //redireciona para uma pasta de documentos ou uma pagina html
}

else if (TBPrimeiraQuestao  == "B") {
    location.assign("../gameover.html")
}

else if (TBPrimeiraQuestao == "C") { 
    location.assign("../personagens/TimaoEPumba2.html") 
}

else 
{
    alert("Não perca tempo, kiara corre perigo.\nFaça uma escolha ja")
}
}
