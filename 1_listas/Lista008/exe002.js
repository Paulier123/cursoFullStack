let carro = {
    cor: "preto",
    modelo: "gol",
    ano: 1993,
    tipo: function meuCarro() {return `Meu carro é um ${carro.modelo} ${carro.cor} ano ${carro.ano}`},
    fabricante: "Wolkswagen"

}

console.log(carro.cor)
console.log(carro.tipo())
console.log(carro.fabricante)

