// const numeros = [2, 34, 10, 91, 4, 5];

// console.log(numeros[numeros.length - 1]);
const fruta = {
  id: "268b",
  nome: "banana",

  apodrecer() {
    return "Fruta apodreceu";
  },
};

// const frutas = {};

const frutas = [
  {
    id: "268b",
    nome: "banana",
  },

  {
    id: "168c",
    nome: "pera",
  },

  {
    id: "345p",
    nome: "mamão",
  },
];

frutas.forEach(fruta => console.log(`${fruta.id} => ${fruta.nome}`));

// const fruta = {
//     id: "268b",
//     nome: "banana",
// }

console.log(fruta.apodrecer());
