let tabela = document.querySelector('.infTabela01')
let inputProduto = document.querySelector('.inputProduto')
let inputId = document.querySelector('.inputId')
let inputCodigo = document.querySelector('.inputCodigo')
const btn = document.getElementById('btnCriarProduto')
const btnLimpar = document.getElementById('btnlimpardados')

criarProduto =()=> {
    if(inputProduto.value.length <1 || inputId.value.length <1 || inputCodigo.value.length <1){
        window.alert( "ERRO: Digite um valor")
       }else if(inputProduto.value.length >60 || inputId.value.length >60 || inputCodigo.value.length >15){
        window.alert ("ERRO: A descrição deve ser menor que 60 carácteres")
       }else{ tabela.innerHTML += `<tr><td> ${String(inputProduto.value)}</td>
       <td>${String(inputId.value)}</td>
       <td>${Number(inputCodigo.value)}</td>       
       </tr>`}
}

//Botão pra i]limpar dados
btnlimpardados=()=>{
    tabela.innerHTML ="";
    inputProduto.innerText = ""
}       

//Muda a cor do botão
btn.addEventListener("mousedown", mudarDeCor=()=>{
        btn.style.backgroundColor = "#417B5A"
    
    })
 btn.addEventListener("mouseup", mudarDeCor=()=>{
        btn.style.backgroundColor = ""
    
    })

btnLimpar.addEventListener("mousedown", mudarDeCor=()=>{
        btnLimpar.style.backgroundColor = "red"
    
    })
 btnLimpar.addEventListener("mouseup", mudarDeCor=()=>{
        btnLimpar.style.backgroundColor = ""
    
    })




