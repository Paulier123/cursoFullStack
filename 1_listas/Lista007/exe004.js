let carro = {
    
    cor: 'Vermelho',
    fabricante:'Fiat',
    modelo: 'uno',
    meuCarro: funcaoSeta = () => {
        return `${carro.fabricante} ${carro.modelo} na cor ${carro.cor}.`
    }
}
let carro2 = {
    
    cor: 'Preto',
    fabricante:'Wolkwagen',
    modelo: 'Gol',
    meuCarro: funcaoSeta = () => {
        return `${carro2.fabricante} ${carro2.modelo} na cor ${carro2.cor}.`
    }
}

console.log(carro.meuCarro())