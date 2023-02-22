let carro = [{
    cor: "preto",
    modelo: "gol",
    ano: 1993,
    tipo: function meuCarro() {return `Meu carro é um ${carro.modelo} ${carro.cor} ano ${carro.ano}`},
    fabricante: "Wolkswagen"

}]

const propriedaeCarro = carro.map((carro)=>{
    console.log( carro.fabricante)
})


