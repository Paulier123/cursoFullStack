class ContaBancaria {
    constructor(titular, saldoInicial, saldoAtual) {
        this.titular = titular;
        this.saldoInicial = saldoInicial;
        
    }
    depositar(valor) {        
        console.log(`Você depositou R$ ${valor.toFixed(2).replace('.',',')} `)        
        return tot+=valor
    }
    sacar(valor) {        
        console.log(`Você sacou R$ ${valor.toFixed(2).replace('.',',')}`)
        return tot-=valor

    }
    mostraSaldo() {
        let totalizador = tot+this.saldoInicial
        console.log(`Seu Saldo atual é de: R$ ${totalizador.toFixed(2).replace('.',',')}`)
    }
}
tot = 0
const contaBancaria = new ContaBancaria("Paulier", 30)
contaBancaria.mostraSaldo()
contaBancaria.depositar(20)
contaBancaria.depositar(20)
contaBancaria.depositar(20)
contaBancaria.depositar(20)
contaBancaria.sacar(300)
contaBancaria.depositar(20)

contaBancaria.mostraSaldo()



