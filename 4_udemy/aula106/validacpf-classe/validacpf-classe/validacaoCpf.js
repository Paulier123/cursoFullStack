// 705.484.450-52 070.987.720-03
class ValidaCPF{
    constructor(cpfenviado){
        Object.defineProperty(this, 'cpfLimpo',{
writable: false,
enumerable: true,
configurable: false,
value: cpfenviado.replace(/\D+/g, '')
        });
       
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = this.geraDigito(cpfSemDigitos)
        const digito2 = this.geraDigito(cpfSemDigitos + digito1)
        this.geraNovoCpf = cpfSemDigitos + digito1 + digito2;

    }
    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length +1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso --;
        }
        const digito = 11 - (total%11);
        return digito <= 9 ? String(digito) : 0;
    }

    éSequencia(){
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCpf()
        
        return 'Chaguei aqui';
    }
}

let validacpf = new ValidaCPF('153.897.527-08');
if(validacpf.valida()){
    console.log('CPF válido')
} else{
    console.log('CPF inválido')
}