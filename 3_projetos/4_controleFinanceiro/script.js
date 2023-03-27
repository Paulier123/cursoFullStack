const boxLancamento = document.querySelector('.boxLançamento')
const lancamento = Number(document.querySelector('.textinput').value)
const novaReceita = document.querySelector('.BttReceita')
const novaDespesa = document.querySelector('.BttDespesa')
const tabela = document.querySelector(".tabela")
const totValores = []

novaReceita.addEventListener('click', function adiciobaDespesa(){
    totValores.push(lancamento)
    tabela.innerHTML =+ `${totValores}`
})

novaDespesa.addEventListener('click', function adicionaReceita (){
    tabela.innerText =+`${totValores}`
})
