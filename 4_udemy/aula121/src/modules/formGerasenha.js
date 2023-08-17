import geraSenha from "./geradores";

const senhaGeradav = document.querySelector('.senhagerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-Numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const geraSenha = document.querySelector('.gera-senha');

export default () => {
    geraSenha.addEventListener('click',()=>{
        senhaGeradav.innerHTML = gera()

    })
}
function gera(){
    const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiusculas.cheked,
    chkMinusculas.cheked,
    chkNumeros.cheked,
    chkSimbolos.cheked
    );
    return senha || 'Nada selecionado'
    
}