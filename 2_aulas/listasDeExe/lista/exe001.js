let carro = {
    cor: 'preto',
    fabricante: 'celta',
    ano: 1993,
    meuCarro: modelo =() => {
        return `Meu carro é ${carro.cor} da fabricante ${carro.fabricante} ano ${carro.ano}`
    }
}
console.log(carro.cor)
console.log(carro.ano)
console.log(carro.meuCarro())