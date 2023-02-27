function Pessoa (paramNome,sobrenome, paramIdade,paramCpf) {
    this.nome = paramNome;
    this.sobrenome = sobrenome
    this.idade = paramIdade;
    this.cpf = paramCpf;

};
var pessoa1= new Pessoa("Paulier", "Rodrigues",29,"889.548.684.8")
var pessoa2= new Pessoa("Hugo", "Fernandes",60,"875.325.465.8")
var pessoa3= new Pessoa("Raphael", "Esteves",90,"854.654.452.9")

console.log(`O cpf da pessoa é ${pessoa3.cpf}`)