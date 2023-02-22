class Retangulo {
    constructor(largura,altura){
        this.altura = altura;
        this.largura = largura;
        this.area = function(){
            return `A área do seu retangulo é de: ${this.altura*this.largura}m²`
        }

    }
}
var retangulo1 = new Retangulo(15,5)
console.log(retangulo1.area())