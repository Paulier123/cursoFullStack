let carro = [{
    cor: "preto",
    modelo: "gol",
    ano: 1993,
    tipo: function meuCarro() {return `Meu carro é um ${carro.modelo} ${carro.cor} ano ${carro.ano}`},
    //fabricante: "Wolkswagen"

}]

for (i=0;i<carro.length;i++) {
  console.log(carro[i])
} 

carro.forEach(car => {
  console.log(car)
});