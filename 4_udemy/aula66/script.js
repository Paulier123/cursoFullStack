const relogio = document.querySelector(".relogio")
const iniciar = document.querySelector(".botaoiniciar")
const parar = document.querySelector(".botaoparar")
const zerar = document.querySelector(".botaozerar")


function mostraHora(segundos) {
    const data = new Date(segundos * 1000)
    
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    })


}
let segundos = 0

function iniciaContador() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = `${mostraHora(segundos)}`
    },
        100)
}
function paraContador(){
    clearInterval(timer)
}
function zeraContador (){
    clearInterval(timer)
    relogio.innerHTML = `${'00:00:00'}`
    segundos = 0
}

iniciar.addEventListener("click", function (evento) { iniciaContador() })
parar.addEventListener('click', function(evento) {paraContador()})
zerar.addEventListener('click', function (evento){zeraContador()})


mostraHora()











