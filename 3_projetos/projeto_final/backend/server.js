const express = require('express')
const cors = require('cors')
const app = express()
const port = 3538

let corsOptions = {
    orign: 'https://localhost:3538'
}

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))


//Routers 

const router = require('./routes/productRouter.js')
app.use('/api/products', router)

//testando
app.get('/', (req,res)=>{
    res.send(`Hello World`)
})

//Escutar a porta configurada
app.listen(port, () => {
console.log(`servidor rodando em: http://localhost:${port}`)
}) 