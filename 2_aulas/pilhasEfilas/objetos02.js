const pessoas = [
  {
    id: "4576b8",
    nome: "João",
    idade: 70,
    cpf: "356.142.707-67",
  }, 
  {
    id: "4576b8",
    nome: "Raul",
    idade: 62,
    cpf: "489.142.707-67",
  }, 
  {
    id: "4576b8",
    nome: "Laura",
    idade: 22,
    cpf: "508.142.707-67",
  }, 
  {
    id: "4576b8",
    nome: "Marcela",
    idade: 35,
    cpf: "123.142.707-67",
  },
];

// Arrow Function - Forma Completa
// Filter
// const pessoasFiltradas = pessoas.filter((pessoa) => {
//   return pessoa.idade > 60; 
// }).forEach((pessoa) => {
//   console.log(pessoa.nome);
// });

// Arrow Function - Forma resumida
// Filter
const pessoasFiltradas = pessoas
.filter(pessoa => pessoa.idade > 60)
.map(pessoa => pessoa.idade += 10);

console.log(pessoasFiltradas);
// .forEach(pessoa => console.log(pessoa.idade));


// ForEach
// pessoas.forEach((pessoa, indice) => {
//   console.log(`${indice} - Nome: ${pessoa.nome} | Idade: ${pessoa.idade}`);
// });




