const tabela = document.getElementById('list')
const nomes = ["Paulier","josé","Hugo"]
let cont = 0
const adicionarItem = () =>{  
    if(cont < nomes.length){
        tabela.innerHTML += `<tr><td>${nomes[cont++]}</td></tr>`   

    } 
    
}