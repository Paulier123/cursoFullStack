class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco
    }
    exibirNome(){
        console.log(`Produto: ${this.nome}`)
    }
    exibirPreco(){
        console.log(`Produto: ${this.preco}`)
    }
   
}
const produto1 =  new Produto('Abacaxi', 15.00)
produto1.exibirNome()
produto1.exibirPreco()