function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter()
    };
    this.capturaEnter = () => {
        document.addEventListener('keypress', elemento => {
            if (elemento.keyCode === 13) {
                this.realizaConta();

            }
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const elemento = event.target;
            
            if (elemento.classList.contains('btn-numeros'))this.addNumdisplay(elemento);
            if (elemento.classList.contains('btn-clear')) { this.clear() };
            if (elemento.classList.contains('btn-del')) { this.del() };
            if (elemento.classList.contains('btn-equal')) { this.realizaConta(elemento) };
        })
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert("Conta inválida");
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert("Conta inválida")
            return;

        }
    }

    this.addNumdisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = "";
    this.del = () => this.display.value = this.display.value.slice(0, -1);    
}

const caculadora = new Calculadora();
caculadora.inicia();