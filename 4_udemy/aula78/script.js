function Calculadora(){
this.display = document.querySelector('.display');

this.capturaCliques = () => {
document.addEventListener('click', event => {
    const elemento = event.target;
    if (elemento.classList.contains('btn-numeros')) this.addNumdisplay(elemento);
});
};

this.addNumdisplay = elemento => this.display.value += elemento.innerText;

this.inicia = () =>{
    this.capturaCliques();
};

}

const caculadora = new Calculadora();
caculadora.inicia();