
let totValor = document.getElementById("displayBalanco")
const novoLancamento = document.querySelector(".boxLançamento")
let BttReceita = document.querySelector(".BttReceita")
const BttDespesa = document.querySelector(".BttDespesa")
const totReceitas = document.querySelector(".totreceitasLancamento")
const totDespesas = document.querySelector(".totDespesaLancamento")
let tabela = document.querySelector(".tabela")
let novaLinha = []

function iniciaControle() {


    adcionarReceita = () => {
        let textInput = Number(document.querySelector(".textinput").value)
        novaLinha.push(textInput)
        let adicionarLinha = document.createElement('td')
        tabela.appendChild(adicionarLinha)
        tabela.innerHTML += `Receita adicionada R$ ${novaLinha[novaLinha.length - 1]}`
        criaBalanco()
        calculaReceita()
        

    }
    adcionarDespesa = () => {
        let textInput = Number(document.querySelector(".textinput").value)
        novaLinha.push(textInput * -1)
        let adicionarLinha = document.createElement('td')
        tabela.appendChild(adicionarLinha)
        tabela.innerHTML += `Despesa adicionada R$ ${novaLinha[novaLinha.length - 1]}`
        criaBalanco()
        calculaDepesa()

    }

}

function criaBalanco() {
    let somatorio = novaLinha.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual
    }, 0)
    let criaParagrafo = document.createElement(`p`)
    totValor.appendChild(criaParagrafo)
    totValor.innerHTML = `${somatorio.toFixed(2).replace('.',',')}`
}

function calculaReceita(){
    let criaReceita = document.createElement('p')
    totReceitas.appendChild(criaReceita)
    for (const receita of novaLinha) {       
         if(receita>=0){
            let somaDeReceita = novaLinha.reduce(function(acumulador,valorAtual){
                return acumulador+valorAtual
            },0)
            totReceitas.innerHTML=`${somaDeReceita.toFixed(2).replace('.',',')}`
        }        
    }       
}
function calculaDepesa(){
    let criaDespesa = document.createElement('p')
    totDespesas.appendChild(criaDespesa)
    for (const despesa of novaLinha){
        if(despesa<0){
            let somaDeDespesa = novaLinha.reduce(function(acumulador,valorAtual){
                return acumulador+valorAtual
            },0)
            totDespesas.innerHTML=`${somaDeDespesa.toFixed(2).replace('.',',')}`
        }
    }
}


iniciaControle()


