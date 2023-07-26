class Figura {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
    calculaArea(){
        console.log(this.altura*this.largura) 
    }       
}

class Retangulo extends(Figura) {
    constructor(altura, largura){  
        super(altura,largura)           
    }
   
}

const retangulo = new Retangulo(3,5)
retangulo.calculaArea()