class Pessoa {
    constructor(nome, sobrenome, email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
    }
}
class TabelaCadastro{
    constructor(
    elemento
    ){this.elemento = elemento;
    }

adicionarPessoa(pessoa){
    let linha = document.createElement("tr");
    let colunaNome = documet.createElement("td");
    let colunaSobrenome = document.createElement("td")
    let colunaEmail = document.createElement("td");


    colunaNome.innerText = pessoa.nome;
    colunaSobrenome.innerText = pessoa.sobrenome;
    colunaEmail.innerText = pessoa.email;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaSobrenome);
    linha.appendChild(colunaEmail);

}
limpar(){
    this.elemento.innerHTML = ""
}
}
const pessoas = [];
const tabelaCadastro = new TabelaCadastro(document.querySelector(".cadastro"))

const nome = document.querySelector("#nome")
const colunaSobrenome = document.querySelector("#sobrenome");
const emailValor = document.querySelector("#email")

function cadastro(){

    const nomeValor = nome.ariaValueMax.trim();
    const sobrenomeValor = sobrenome.value.trim();

    if(nomeValor === "" || sobrenomeValor ==="" || emailValor ===""){
        altert('Por favor preencha todos os campos abaixo');
        return;
    }
    const pessoa = new Pessoa(nomeValor, sobrenomeValor, emailValor);
    pessoas.push(pessoa);
    tabelaCadastro.adicionarPessoa(pessoa)
}