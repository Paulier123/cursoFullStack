const n1Input = document.querySelector("#n1");
const n2Input = document.querySelector("#n2");
const result = document.querySelector(".result-caixa p");
const operador = document.querySelector(".operador p");

const getN1 = () => Number(n1Input.value);
const getN2 = () => Number(n2Input.value);

const calcular = (operacao) => {
    const n1 = getN1();
    const n2 = getN2();

    switch (operacao) {
        case "soma":
            somar(n1,n2);                     
            break;

        case "subtracao":
            subtracao(n1,n2);
            break;

        case "divisao":
            divisao(n1,n2);
            break;
        
        case "multiplicacao":
            multiplicacao(n1,n2);
             
             break;
    }

}

const somar = (n1,n2) => {
    operador.innerHTML= '+';
    operador.style.color = "red"
    result.innerHTML = (n1+n2).toFixed(2);
}

function subtracao(n1,n2){
    operador.style.color = 'green'
    operador.innerHTML= '-';
    result.innerHTML = (n1-n2).toFixed(2);
}

function divisao(n1,n2){
    operador.style.color = 'blue'
    operador.innerHTML= '/';
    result.innerHTML = (n1/n2).toFixed(2);
}
function multiplicacao(n1,n2){
    operador.style.color = "purple"
    operador.innerHTML= '*';
    result.innerHTML = (n1*n2).toFixed(2);
}
