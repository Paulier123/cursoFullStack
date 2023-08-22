const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    return res.send("<h1>Hello f* world</h1>")
})

app.listen(port,()=>{
    console.log(`Rodando no link: http://localhost:${port}`)
})
