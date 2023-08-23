const express = require('express');
const app = express();
const port = 3000

const usuarioscontroller = {

    listarUsuarios: app.get('/',(req,res)=>{
        res.status(200).send(`Ola mundo`)
    
    }),

    infPagina: 
        app.get('/about',(req,res)=>{
            res.status(200).send('Sobre nós')
            }),  
            
    contato:
    app.get('/contact',(req,res)=>{
        res.status(200).send('Entre em contato no numero(21)999999')
        })
}



app.listen(port, ()=>{
console.log(`Servidor rodando no link: http://localhost:${port}`)
})

module.exports = usuarioscontroller