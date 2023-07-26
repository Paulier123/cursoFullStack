class Calculadora{
    constructor(seno, cos){
        this.seno = seno;
        this.cos = cos;

    }
    calcularSeno(){
        let senoValor = Math.sin(this.seno)
        console.log(`O seno de ${this.seno} é ${senoValor}`)
    }
    calcularCos(){
        let cosValor = Math.cos(this.cos)
        console.log(`O cos de ${this.cos} é ${cosValor}`)
    }
}

const calculadora = new Calculadora(5,5)
calculadora.calcularSeno()
calculadora.calcularCos()