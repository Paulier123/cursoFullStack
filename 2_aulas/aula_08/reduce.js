const numeros = [13,54,8,631,18]

let numeros2 = numeros.reduce((inicio,acumulado)=>{
    return acumulado+=inicio

},0)
console.log(numeros2)
