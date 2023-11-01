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

// Criar lançamento
const criarLancamento = (item) => {
    const template = document.getElementById('lacamento-template')
    const lancamentoElemento = document.importNode(template.content, true)
    const itens_lancamento = lancamentoElemento.querySelectorAll('span')
   
    itens_lancamento[0].innerText = item.descricao
    itens_lancamento[1].innerText = "R$ "+item.valor
    itens_lancamento[2].innerText = new Date(item.data).toLocaleDateString('PT-BR')
    itens_lancamento[3].innerText = item.id
    return lancamentoElemento
}

//Adicionar novo lançamento
const novoLancamento = async () =>{
    const lancamentoNomeDescricao = document.getElementById('textDescricao')
    const lancamentoNomeValor = Number(document.getElementById('textinput').value)
    const data = document.getElementById('textData')
    const lancamentoNomeData = data.value
    const lancamento = {
        descricao: String(lancamentoNomeDescricao.value),
        valor: Number(lancamentoNomeValor),
        data: lancamentoNomeData
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

//Deletar lançamento

const excluirLacamento = async () => {

//chamar delete na API
   
    const txtId = document.getElementById('txtId').value
    const response = await fetch(`http://localhost:3538/api/products/${txtId}`, {
        method: 'DELETE',
    headers:{
        "Content-Type": 'application/json' 
    } 
})
    
}

// Atualizar lançamento
const atualizaLancamento = async () =>{
    const id = document.getElementById('informaID').value
    const descricaoAtualizada =document.getElementById('txtatualizaDescricao')
    const valorAtulizado = document.getElementById('txatatualizaValor').value
    const dataAtualizada = document.getElementById('txtatualizaData').value
      
    const lancamentoAtualizado = {
        id:id,
        descricao: String(descricaoAtualizada.value),
        valor: valorAtulizado,
        data: dataAtualizada
    }
    const init = { 
        method: 'PUT', 
        headers:{
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(lancamentoAtualizado)
    }
    // Chamar PUT API
    const response = await fetch(`http://localhost:3538/api/products/${id}`, init)
}


//Carregar página
window.onload = () => {
    carregarPagina() 
    atualiza()   
    deleta()
    console.log("iniciado") 
} 


const btnNovoLancamento = document.getElementById('BttReceita')
btnNovoLancamento.onclick = novoLancamento;   

function deleta(){
    const btnDelete = document.getElementById('txdelete')
    btnDelete.onclick= excluirLacamento;    
    
}
function atualiza(){
    
    const btnAtuliza = document.getElementById('btnAtualiza')
    btnAtuliza.onclick = atualizaLancamento;     

}



