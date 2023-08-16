//Config inicial inicializar variaveis
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")
const app = express() // inicialisa o express de fato


// forma de ler JSON / usar middlewares (recustos sexecutados estre as requisições e respostas) 

app.use( //app.use esta criando um middleware
    express.urlencoded({
        extended: true
    })
)
app.use(
    express.json()
)
// rota da API
const personRoutes = require('./routes/personRoutes')
app.use('/', personRoutes)

//rota inicial / endpoint ou rota

app.get("/", (req, res) => {


    res.json({
        message: "Oi express!" 
    }) // quer dizer que a resposta para a requisição será um json
})

//entregar ua porta, onde o nodemon vai esctutar

const DBUSER = process.env.DBUSER
const DBPASSWORD = encodeURIComponent(process.env.DBPASSWORD)
//senha db fNyrzbxxWEtNPjO7
//mongodb+srv://paulier:fNyrzbxxWEtNPjO7@cluster0.t4fxqa8.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.t4fxqa8.mongodb.net/?retryWrites=true&w=majority`)

    .then(() => {
        console.log("Conectamos o MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))