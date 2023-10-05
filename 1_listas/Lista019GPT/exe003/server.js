const express = require('express');
const dotenv = require('dotenv');
const bodyPharser = require('body-parser')
const app = express()
app.use(bodyPharser.urlencoded({ extended: false })) // o body-parser serve para pegar os dados do corpo da requisição
app.use(bodyPharser.json())
dotenv.config();
const PORT = process.env.PORT || 6363



const Users = [
    {
        id: "321",
        nome: 'Paulier',
        sobrenome: 'Rodrigues',
        idade: 30
    },
    {
        id: "658",
        nome: 'Alex',
        sobrenome: 'Aldelino',
        idade: 50
    },
    {
        id: 'dc6g75bdb312t',
        nome: 'Eduardo',
        sobrenome: 'Vergalino',
        idade: 32
    }
]

const usersController = {

    listarUsuarios: 
    
    app.get('/users', (req, res) => {
        res.status(200).json(Users)
    },
    app.use((req,res,next)=>{
        const dataHota = new Date().toLocaleString();
        res.send(`Requisição feita em: ${dataHota}`);
        next();
    })
),

    usuarioId: app.get('/users/:id', (req, res) => {
        const id = String(req.params.id)
        const user = Users.find((el) => el.id === id)

        if (!user) {
            res.status(404).send(`<h1>Usuário não encontrado</h1>`)
<<<<<<< HEAD
        }     
    }),
    novoUsuario : app.post('/users',(req, res)=>{
        const newUser = Users.push((el)=>el+=el)
        res.status(200).json(newUser)
=======
        } else {
           
            res.status(200).json(user)
        }

    }),
    adicionaUsuarios: app.post('/users', (req, res) => {
        const objeto = req.body
        Users.push(objeto)
        res.status(200).json(objeto)

    }),
    erroRota:
    app.use((req,res)=>{
        res.status(500).send(`Erro Rota não encontrada`) // middleware para rotas nao especificadas

>>>>>>> bd9ad5f6237a0ad5c8d49b621aee9f4ad6e99767
    })
}


app.listen(PORT, () => {
    console.log(`Servidor rodando no link: http://localhost:${PORT}`)
})
module.exports = usersController