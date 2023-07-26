class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;

    }
}
class Estudante extends(Pessoa) {
    constructor(nota1,nota2,curso,nome,idade){
        super(nome,idade);
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.curso = curso;
        this.idade = idade;

    }
    calcularMedia(){
        
console.log(`O aluno ${this.nome} do curso ${this.curso}, tem ${this.idade} anos e ficou com média ${(this.nota1+this.nota2)/2}`)
    }
}
const estudante = new Estudante(5.0,4.0,"Engenharia",'Paulier',30)
const estudante2 = new Estudante(9,1,"Computação",'robson',30)
estudante.calcularMedia()
estudante2.calcularMedia()