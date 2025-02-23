let resultado = rankingDeHeroi(15,30)
if (resultado < 10){
    console.log("O heroi tem saldo de "+resultado+" e esta no nivel ferro")
}
else if(resultado >=11 && resultado <= 20){
    console.log("O heroi tem saldo de "+resultado+" e esta no nivel bronze")
}
else if(resultado >=21 && resultado <= 50){
    console.log("O heroi tem saldo de "+resultado+" e esta no nivel prata")
}
else if(resultado >=51 && resultado <= 80){
    console.log("O heroi tem saldo de "+resultado+" e esta no nivel ouro")
}
else if(resultado >=81 && resultado <= 90){
    console.log("O heroi tem saldo de "+resultado+" e esta no nivel diamante")
}
else if(resultado >=91 && resultado <= 100){
    console.log("O heroi tem saldo de "+resultado+" e esta no nivel Lendario")
}
else if(resultado >=101){
    console.log("O heroi tem saldo de "+resultado+" e esta no nivel imortal")
}
function rankingDeHeroi(vitoriasDeHeroi,derrotasDeHeroi){
    let definicaoDeRanking = vitoriasDeHeroi - derrotasDeHeroi
    return definicaoDeRanking
}