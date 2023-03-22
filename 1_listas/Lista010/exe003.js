var tot = 0
class ContaBancaria {
    constructor(saldo,titular) {
        this.saldo = saldo;
        this.titular = titular;
        this.depositar = function (){
            return `O saldo do cliente ${this.titular} é de R$ ${tot+=saldo} `
        }
        this.sacar = function(){
            return `O saldo do cliente ${this.titular} é de R$ ${tot-=saldo} `

        }
  
    }
}
var saldo1 = new ContaBancaria(30,'Paulier')

console.log(saldo1.depositar())

var saldo1 = new ContaBancaria(20,'Paulier')

console.log(saldo1.sacar())

var saldo2 = new ContaBancaria(300,'Paulier')

console.log(saldo2.depositar())
