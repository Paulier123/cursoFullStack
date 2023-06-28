const nomes = [
    "Raphael",
    "Paulier",
    "jose",
    "Arlino",
    "Estruciogenio"
]
const main = document.querySelector('principal')
const tabela = document.createElement('table')
const tbody = document.createElement('tbody')
const thead = document.createElement('thead')
nomes.forEach((nome,index) => {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const text1 = document.createTextNode(`Nome: ${index}`)
    const text2 = document.createElement(`${nome}`)
    td1.appendChild(text1)
    td2.appendChild(text2)
    tr.appendChild(td1)
    tr.appendChild(td1)    
});
tabela.appendChild("tbody")
main.appendChild(tabela)