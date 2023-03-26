const boxLancamento = document.querySelector('.boxLançamento')
const lancamento = Number(document.querySelector('.textinput').value)
const novaReceita = document.querySelector('.BttReceita')
const novaDespesa = document.querySelector('.BttDespesa')
const tabela = document.querySelector(".tabela")

novaReceita.addEventListener('click', function adiciobaDespesa(){
    const totValores = []
    totValores.push(lancamento)
    tabela.innerHTML =+ `${totValores}`
})

novaDespesa.addEventListener('click', function adicionaReceita (){
    tabela.innerText =+`${totValores}`
})
