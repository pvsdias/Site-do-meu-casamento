var nome =  prompt("Qual é o eu nome")

function carregar(){

    var mensagem = document.getElementById('msg')
    var agora = new Date()
    var hora = agora.getHours()

    hora = 15

    if(hora >= 0 && hora < 12){

        mensagem.innerHTML = `Bom dia, ${nome}`

    } else if (hora >= 12 && hora < 18) {

        mensagem.innerHTML = `Boa tarde, ${nome}`

    } else {

        mensagem.innerHTML = `Boa noite, ${nome}`

    }
}