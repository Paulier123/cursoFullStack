//Identificar numeros primos
//Só são Divisiveis por eles mesmos e por 1



function numPrimo(numero){
     let primo = true // inicia considerando que todo nuemro é primo
     // i começa em 2 porque o zero não faz diferença e 1 ele é primo
     for (let i = 2; i < numero; i++){// O contador começa em dois e vai adicionando 1 até chegar no numero
          if (numero % i === 0){
               primo = false
               break
     }
}if (primo == true){
     console.log(`O numero ${numero} é primo!`)
}else{
     console.log(`O numero ${numero} não é primo!`)
}
}
numPrimo(613)
