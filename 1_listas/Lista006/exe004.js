let numeros = [6,5,1,165,84,7,32]

const numero = numeros.reduce((anterior,atual,indice)=> {
  return anterior+=atual

})
console.log(numero)
