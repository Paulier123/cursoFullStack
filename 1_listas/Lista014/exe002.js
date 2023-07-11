class Animal{
    constructor(){
        this.nome = "";
        this.especie = "";
    }
    definirNome(nome){
this.nome = nome;
    }
    definirEspecie(especie){
        this.especie = especie;
    }
    exibirDados(){
        console.log(`nome: ${this.nome}`)
        console.log(`especie: ${this.especie}`)
    }
}
const animal = new Animal();
animal.definirNome('Rex')
animal.definirEspecie('cachorro')
animal.exibirDados()