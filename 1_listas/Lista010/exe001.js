class Pessoa {
    constructor (nome, idade)
    {
this.nome = nome;
this.idade = idade;
this.apresentar = function apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`
}
    }
    
}
var pessoa1 = new Pessoa('Paulier',29)
var pessoa2 = new Pessoa('Mylena', 30)
console.log(pessoa2.apresentar())