//Recebe o cpf

function validar() {
    let result = document.querySelector('.result')
    let btn = document.querySelector('.btnVerificar')
    // let cpf = document.querySelector('.cpftext')
    let cpf = '15389752708'

    //remover todo conteudo que não for numero
    let cpflimpo = cpf;
    // let cpflimpo = cpf.replace(/\D+/g, "");

    //precisa reconverter para array
    let arrayCpf = Array.from(cpflimpo)

    //remover os útimos dois digitos

    let ultimosdigitos = arrayCpf.splice(-2)

    // console.log(ultimosdigitos)
    //inverter ordem do array
    let arrayCpfInverso = []
    for (i = arrayCpf.length - 1; i >= 0; i--) {
        arrayCpfInverso.push(arrayCpf[i])
    }  

    let novoArray = []

    function criaNovoArray(){
        //percorrer o array e multiplicar o indice de 2 a 10
        if(novoArray==""){
        return result.innerText = "Digite o CPF"
        }else{
        arrayCpfInverso.forEach((valor, indice) => {
            novoArray.push((indice + 2) * valor)
        })
        
    //Somar o resultado da multiplicação
        somarNovoArray=(number)=> {
            let array  =number.reduce((tot, vlAtual) => {
                 tot + vlAtual
            })
            return array
        }
        function dividirporOnze(number){
            return divOnze = number - (somarNovoArray(novoArray) % number)
                    }
        // Dividir o resultado por 11
        dividirporOnze(11)
        console.log(divOnze)
    } 
}
criaNovoArray()

    //verifica se o resultado é maior que 9
    if (divOnze > 9) {
        divOnze = 0
    } else {
        divOnze
    }
    //empurrar o penultimo digito no array
    arrayCpfInverso.unshift(divOnze)

    console.log(arrayCpfInverso)

    //verificando o ultimo digito, multiplicar o indice de 2 a 11
    let novoArrayDois = [] //novo array vazio que recebe o digito do calculado mais o restante 
    arrayCpfInverso.forEach((valor, indice) => {
        novoArrayDois.push(valor * (indice + 2))
    });

    console.log(novoArrayDois)

    //reduzir o valor
    let arrayReduzidoDois = novoArrayDois.reduce((tot, vlAtual) => {
        return tot + vlAtual
    })

    // Fazemos o modulo da divisao e pegamos o resto e subtraimos de 11 
    let divOnzeDois = 11 - (arrayReduzidoDois % 11)

    //verifica se o ultimo dígito é maior que 9

    if (divOnzeDois > 9) {
        divOnzeDois = 0
    } else {
        divOnzeDois
    }
    //juntar os resultados para comparar com o dois do inicio
    let digitosVerificados = `${divOnze}${divOnzeDois}`

    //pega os digitos extraidos do cpf e junta eles
    novoArrayDigitos = []
    for (const digito of ultimosdigitos) {
        novoArrayDigitos += digito
    }

    btn.addEventListener("click", function () {
        if (novoArrayDigitos === digitosVerificados) {
            result.innerText = `O cpf ${Number(cpf.value)} é valido`
        } else {
            result.innerText = `O cpf ${Number(cpf.value)} não é válido`

        }

    }
    )

}

validar()