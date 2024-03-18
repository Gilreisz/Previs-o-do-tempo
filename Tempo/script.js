

const key = "bd6f6ea0478cf1b6b33beb17b190dcec"

async function buscarcidade(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
 
    tela(dados)
}

function tela (dados){
    console.log(dados)
    document.querySelector(".cid").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "A umidade é de " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

function clickbotton (){
    const cidade = document.querySelector(".cidade").value
    
    buscarcidade(cidade)
}