//2 - Identificador de numeros maiores

function maior(n1,n2,n3){
    if (n1>n2 && n1>n3){ 
        console.log(`O Primeiro numero é o maior`)
    } else if (n2>n1 && n2>n3){
        console.log(`O segundo numero é maior`)
    } else {
        console.log(`O terceiro numero é o maior`)
    }
}
maior(10,3,4)

