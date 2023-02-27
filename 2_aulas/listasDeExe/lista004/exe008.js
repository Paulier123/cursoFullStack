let numero = 15
let total = 1
console.log(`O fatorial de ${numero} é: `)
do {
    
    numero--
    total*=numero+1
} while (numero>0);
console.log(`${total}`)