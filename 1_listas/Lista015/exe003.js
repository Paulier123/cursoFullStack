class Veiculo{
    constructor(marca,modelo,ano,preco){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }

}
class Carro extends(Veiculo){
    constructor(marca,modelo, ano,preco,placa){
        super(marca,modelo,ano,preco)
        this.placa=placa;

    }
    calcularValorParcelas(qtdparcelas){

        console.log(`O veiculo ${this.modelo} ${this.marca}, ano ${this.ano} placa ${this.placa} em ${qtdparcelas}X tem as parcelas no valor de R$: ${((this.preco/qtdparcelas)*0.02)+this.preco/qtdparcelas} reais`)
    }
}


const carro = new Carro("Wolkswagen","Gol",2010,50000,"KXB3564")

carro.calcularValorParcelas(30)
