const totalLancamentos = document.querySelector(".totvalor")
let totValor = document.querySelector(".totvalor")
const novoLancamento = document.querySelector(".boxLançamento")
let BttReceita = document.querySelector(".BttReceita")
const BttDespesa = document.querySelector(".BttDespesa")
const totReceitas = document.querySelector(".totReceitas")
const totDespesas = document.querySelector(".totDespesas")
let tabela = document.querySelector(".tabela")
let novaLinha = []

function iniciaControle() {


    adcionarReceita = () => {
        let textInput = Number(document.querySelector(".textinput").value)
        novaLinha.push(textInput)
        let adicionarLinha = document.createElement('td')
        tabela.appendChild(adicionarLinha)        
        tabela.innerHTML += `Nova Receita adicionada R$ ${novaLinha}`
        
    }
    adcionarDespesa = () => {
        let textInput = Number(document.querySelector(".textinput").value)
        novaLinha.push(textInput)
        let adicionarLinha = document.createElement('td')
        tabela.appendChild(adicionarLinha)
        tabela.innerHTML += `Nova Despesa adicionada R$ ${novaLinha}`
    }
    balanco = () => {
        let textInput = Number(document.querySelector(".textinput").value)
        novaLinha.push(textInput)
        let totBalanco = document.createElement('p')
        totalLancamentos.appendChild(totBalanco)        
        totalLancamentos.innerHTML = `${novaLinha}`
    
        }
 
}

iniciaControle()


