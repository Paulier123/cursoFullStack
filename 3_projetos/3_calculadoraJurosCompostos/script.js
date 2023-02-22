

function adicionarV() {
    let valorIni = Number(document.getElementById('txvalor').value)      
    let res = document.querySelector('div#res')
    valor = []
    valor.push(valorIni)    
    res.innerHTML = `<br>O valor Inicial foi de: R$ ${valor}</br>`
}
function adicionarT(){
    taxaJuros = Number(document.getElementById('txtaxa').value)
    res.innerHTML += `<br>A taxa de juros é de ${taxaJuros}%</br>`
    
}
function adicionarM(){
    tempo = Number(document.getElementById('txtempo').value)
    res.innerHTML += `<br>O tempo de aplicação é de: ${tempo} anos</br>`
}
res.innerHTML = ""
function total(){
    /*M = C (1+i)t. 
    M é o montante acumulado, o total da aplicação
    C é o capital investido
    i é a taxa de juros
    t é o período de tempo*/
    res.innerHTML = ""
    let total = valor*((1+((taxaJuros)/100))**tempo)
    res.innerHTML += `<br>O tatal acumulado será de <strong>R$: ${total.toFixed(2).replace('.', ',')}</strong></br>`
    let tabela = document.getElementById('txtabela')
       
    for (i=1;i<=tempo;i++){
        total2 = valor*((1+((taxaJuros)/100))**i)
        let elemento = document.createElement('option')
        tabela.appendChild(elemento)
        elemento.innerHTML = `No ${i}° ano o valor será de <strong>R$ ${total2.toFixed(2).replace('.',',')}</strong>`
        
    }
    
}