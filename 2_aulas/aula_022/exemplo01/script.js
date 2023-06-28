const nomes = [
    "Raphael",
    "Paulier",
    "jose",
    "Arlino",
    "Estruciogenio"
]
const lista = document.querySelector(".lista");
let cont = 0;
const adicionaritem = ()=>{
    if(cont<nomes.length){
        const tr =document.createElement('tr')
        const td1 =document.createElement('td')
        const td2 =document.createElement('td')
        const text1 = document.createTextNode(nomes[cont])
        const text2 = document.createTextNode(nomes)
        
    }
}