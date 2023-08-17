const express = require('express');
const app = express();
const port = 4442;

app.get('/',(req,res)=>{
    return res.send("<h1>Hello f* world</h1>")
})

app.listen(port,()=>{
    console.log(`Rodando no link: http://localhost:${port}`)
})