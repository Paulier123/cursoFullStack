const express = require('express')
const app = express()
const port = 3537

app.get('/', (req,res)=>{
    res.send(`Hello World`)
})

//Escutar a porta configurada
app.listen(port, () => {
console.log(`servidor rodando em: http://localhost:${port}`)
})