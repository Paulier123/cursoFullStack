let numeros = [6,5,1,165,84,7,32,6,13,24,8,9,45]

console.log(`Em um array com os elementos ${numeros}`)

const filtro = numeros.filter((elemento)=>{
return elemento%2==0
})

const numero = filtro.reduce((inicio,atual,indexAtual)=>{
return indexAtual+1
})
console.log(`A quantidade de numeros pares são: ${numero}`)



