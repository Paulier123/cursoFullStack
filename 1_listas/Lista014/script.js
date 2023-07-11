const nome = document.querySelector('.inputnome')
const idade = document.querySelector('.inputidade')
const btn = document.querySelector('.btnadicionar')
const cadastro = document.querySelector('.cadastro')

function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
}
const novaPessoa = new Pessoa(nome, idade)
let nomePessoa = []
nomePessoa.push(novaPessoa)

btn.addEventListener('click', adicionarPesoa)

function adicionarPesoa(){    
    let p = document.createElement('p')
    cadastro.appendChild(p)
    cadastro.innerText = nomePessoa

}