const express = require('express');
const app = express();
const port = 4545;

const hello = "Hello world"
app.get('/hello', (req,res)=>{
    res.send(hello)
})


app.post('/message',(req,res)=>{
    res.status(201).send('Enviado com Sucesso')
})

app.put('/update',(req,res)=>{
 res.status(200).send('Produto atualizado com Sucesso')

})

app.delete('/delete', (req,res)=>{
res.status(200).send('Item deletado com sucesso')
})



app.listen(port,()=>{
    console.log(`Server rodando no link: http://localhost:${port}`)
})
