
// Identificador de plaidormos
//Digite a palavra
let nome = Array.from('Radar');

//map cria uma nova string
let inve = nome.map(function (item,indice,array){
     return array [array.length -indice -1]})

//join junta os objetos da array e '' remove as virgulas
let junto1 = (nome.join(''))

let junto2 = (inve.join(''))

if (junto1.toUpperCase()==junto2.toUpperCase()){
     console.log(`A palavra digitada é um Palidromo, pois quando digitada ao Iverso lê-se: ${junto2}`)

}else{
     console.log(`A palavra ${junto1} digitada não é um palidromo, pois ao inverso ficaria ${junto2}`)
}


