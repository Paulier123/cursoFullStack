function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
}
const pessoa = new Pessoa('Paulier', 30)

console.log(pessoa.nome)
console.log(pessoa.idade)
    console.log(`A Pessoa 1 se chama ${pessoa.nome} e tem ${pessoa.idade} anos de idade`)