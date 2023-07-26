class Forma {
    calcularPerimetro(){
        console.log(`O perimetro do Circulo é ${((this.raio*2)*3.14).toFixed(2)}`)

    }
}
class Circulo extends(Forma){
    constructor(raio){
        super()
        this.raio = raio;

    }
    calcularArea(){
        console.log(`A área do circulo é ${((3.14)*this.raio).toFixed(2)}`)
    }
}
const circulo = new Circulo(20)
circulo.calcularPerimetro()
circulo.calcularArea()
