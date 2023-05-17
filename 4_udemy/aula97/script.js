//Recebe o cpf
let cpf = '153.897.527-08'
//remover todo conteudo que não for numero
let cpflimpo =  cpf.replace(/\D+/g, "");

//precisa reconverter para array
let arrayCpf = Array.from(cpflimpo) 

//remover os útimos dois digitos
const  ultimosDigitos = arrayCpf.splice(-2)

//inverter ordem do array
let arrayCpfInverso = []
for (i=arrayCpf.length-1;i>=0;i--){
    arrayCpfInverso.push(arrayCpf[i])
}

//percorrer o array e multiplicar o indice de 2 a 10
let novoArray = []
arrayCpfInverso.forEach((valor, indice) => {     
     novoArray.push((indice+2)*valor)
})

//Somar o resultado da multiplicação
let arrayReduzido = novoArray.reduce((tot, vlAtual)=>{
    return tot+vlAtual
})
console.log(arrayReduzido)
    
// Dividir o resultado por 11
let divOnze = arrayReduzido%11


//comparar o resultado com o penultimo digito

//empurrar o penultimo digito no array
arrayCpfInverso.push(divOnze)

//verificando o ultimo digito, multiplicar o indice de 2 a 11
let novoArrayDois=[]

arrayCpfInverso.forEach((valor,indice) => {
    novoArrayDois.push(valor*(indice+2))
});

//reduzir o valor


let arrayReduzidoDois = novoArrayDois.reduce((tot,vlAtual)=>{
    return tot+vlAtual
})
console.log(arrayReduzidoDois)

let divOnzeDois = arrayReduzidoDois%11
console.log(divOnzeDois)


