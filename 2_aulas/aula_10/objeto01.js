const pessoas = [
    {id: '654sf54s',
    nome:'Paulier',
    idade: 70,
    cpf: '164.652.894-97',
    },

    {id: '654sf54s',
    nome:'Bruno',
    idade: 63,
    cpf: '164.652.894-97',
    },

    {id: '654sf54s',
    nome:'José',
    idade: 16,
    cpf: '164.652.894-97',
    },

    {id: '654sf54s',
    nome:'Juliana',
    idade: 61,
    cpf: '164.652.894-97',
    },

    {id: '654sf54s',
    nome:'Raphael',
    idade: 13,
    cpf: '164.652.894-97',
    },

]
//forma manual

// console.log(pessoas[0].nome)
// console.log(pessoas[1].nome)
// console.log(pessoas[2].nome)
// console.log(pessoas[3].nome)
// console.log(pessoas[4].nome)

// pessoas.forEach(element => {
//     console.log(element.nome)
// });

//minha forma

// pessoas.filter((elemento,indice)=>{
//     if (elemento.idade>60 ){
//         console.log(`As pessoas maiores de 60 anos são ${elemento.nome} com ${elemento.idade} anos`)
//     }   
// })

//forma do professor

//  const pessoa = pessoas.filter((elemento)=>{
//     return elemento.idade>60
//  }).forEach((elemento)=>{
//     console.log(`As pessoas maiores de 60 são ${elemento.nome} com ${elemento.idade} anos`)
//  })

//notação simplificada
 const pessoa = pessoas
 .filter(elemento => elemento.idade>60)
 .forEach((elemento) => {return elemento.idade}).map(elemento => console.log(elemento.idade+=10))


