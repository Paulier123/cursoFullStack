
const criarLancamento = (item) => {
    const template = document.getElementById('lacamento-template')
    const lancamentoElemento = document.importNode(template.content, true)
    const itens_lancamento = lancamentoElemento.querySelectorAll('span')

    itens_lancamento[0].innerText = item.descricao
    itens_lancamento[1].innerText = item.valor
    itens_lancamento[2].innerText = item.data

    return lancamentoElemento
}

//fetch API comunicação com api
const carregarPagina = async () => {

    const response = await fetch('http://localhost:3538/api/products/selecionarProdutos') //carrega os dados do banco de dados, requisição GET
    const dados = await response.json()
    console.log(dados)

//pra cada item desse array
    dados.forEach(item => {

        const containerLancamento = document.getElementById('container-lancamento') 
        const lancamentoElemento = criarLancamento(item)
        containerLancamento.append(lancamentoElemento)
    })
}


const novoLancamento = async () =>{
    const lancamentoNomeDescricao = document.querySelector('.textDescricao')
    const lancamentoNomeValor = Number(document.querySelector('.textinput').value)
    const lancamentoNomeData = document.querySelector('.textData')


    const teste = "27/04/1993"
    const dataBr = new Date(teste)
    const ano = Number(dataBr.getFullYear().value)
    const mes = Number(dataBr.getMonth().value)
    const dia = Number(dataBr.getDate().value)       
    const novaDataFormatada = `${ano}/${mes}/${dia}`
    console.log(novaDataFormatada)



    const lancamento = {
        descricao: String(lancamentoNomeDescricao).value,
        valor: lancamentoNomeValor,
        data: novaDataFormatada
    }
    const init = {
        method: 'POST',
        headers:{
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(lancamento)
    }
    //chamar POST na API
    
    const response = await fetch(' http://localhost:3538/api/products/adicionarProduto', init)
    const dados = await response.json()

    const containerLancamento = document.getElementById('container-lancamento') 
    const lancamentoElemento = criarLancamento(dados)
    containerLancamento.append(lancamentoElemento)

}

window.onload = () => {
    carregarPagina()
    const btnNovoLancamento = document.querySelector('.BttReceita')
    btnNovoLancamento.onclick = novoLancamento    
    console.log("iniciado") 
} 
