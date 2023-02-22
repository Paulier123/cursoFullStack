//Filtar os nuemros pares dentro de uma array
let numeros = [3,4,88,6,4,78,23]

let filtrar = ()=> {
    console.log(`Os numeros pares dentro do array são: `)
   for (i=0;i<=numeros.length;i++){

        if(numeros[i]%2==0){
            
            console.log(`${numeros[i]}`)
} } }
filtrar()
// Filtrar um nome dentro de uma array

let nomes = ['Paulier','Mylena','Pedro']

let filtrar2 = () => {
    
    for (i=0;i<=nomes.length;i++){
        if(nomes[i]==='Paulier'){
            console.log(nomes[i])
    } } }            
filtrar2()