const numeros = [32,1,6,5,4]

numeros.push(10)
numeros.unshift(33)
numeros.pop()
numeros.shift()

console.log(numeros)

numeros.forEach((numero,index,array) => {
    console.log(index)   
});
