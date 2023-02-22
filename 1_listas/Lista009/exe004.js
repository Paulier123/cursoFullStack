let pessoas = [
    {
        nome: "Paulier",
idade: 29,
Nacionalidade: "Brasileiro",
id:'2fs635f4'
    },

    {nome: "Mylena",
idade: 15,
Nacionalidade: "Brasileiro",
id: '654fgh54fgh'
    },

    {
        nome: "João",
idade: 23,
Nacionalidade: "Brasileiro",
id: '2fs635f4'
    },

    {nome: "Alfred",
idade: 17,
Nacionalidade: "Frances",
id: 'hfgh5h5'}]

const pessoasMaiores = pessoas.filter((pessoa)=>{return pessoa.idade>=18}).map((pessoa)=>{return pessoa.nome})

console.log(`As pessoas maiores de 18 anos são: ${pessoasMaiores}`)

