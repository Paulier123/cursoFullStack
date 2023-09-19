const express = require('express');
const dotenv = require('dotenv');
const app = express()
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
    
    listarUsuarios : app.get('/users',(req,res)=>{
        res.status(200).json(Users)
    }),

    usuarioId : app.get('/users/:id',(req,res)=>{        
        const id = String(req.params.id)
        const user = Users.find((el)=>el.id===id)

        if(user){
            res.status(200).json(user) 
        }else{
            res.status(404).send(`<h1>Usuário não encontrado</h1>`)
        }     
    }),
    adicionaUsuarios : app.post('/user',(req,res)=>{
        res.status(200).send('usárioadicionado')
    })
}

app.listen(PORT, ()=>{
    console.log(`Servidor rodando no link: http://localhost:${PORT}`)
})
module.exports = usersController