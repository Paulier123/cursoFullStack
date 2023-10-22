const express = require('express')
const cors = require('cors')
const app = express()
const port = 3537



//Middlewares
app.use(express.json)
app.use(express.urlencoded({extended: true}))


//Routers

const router = require('./routes/productRouter.js')
app.use('/api/prodicts', router)

//testtando
app.get('/', (req,res)=>{
    res.send(`Hello World`)
})

//Escutar a porta configurada
app.listen(port, () => {
console.log(`servidor rodando em: http://localhost:${port}`)
})