function Pizza (sabor, tamanho, valor) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.valor = valor; 
    this.tabelaPreco = tabelaPreco = () =>{
        return `A pizza ${this.sabor} custa R$ ${this.valor.replace('.', ',')}`
    }
}
let pizza1 = new Pizza("Portuguesa", "Grande", '59.90');
let pizza2 = new Pizza("Catupiri", "Pequena", "39.9");
let pizza3 = new Pizza("Bacon", "Média", "49.90")

 
console.log(`${pizza1.tabelaPreco()}`)
console.log(typeof Pizza)

