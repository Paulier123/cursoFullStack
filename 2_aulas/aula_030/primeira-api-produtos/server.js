const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//Dados Simulados de produtos
const produtos = [
  {
    id: 1,
    nome: "Pregos",
    preco: 5.99,
  },
  {
    id: 2,
    nome: "Martelo",
    preco: 12.9,
  },
  {
    id: 3,
    nome: "Trena",
    preco: 5.99,
  },
];

// Rotas da API
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((el) => el.id === id);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({
      error: "Produto não encontrado",
    });
  }
});

app.post("/produtos", (req, res) => {
    const { nome, preco } = req.body
    const id = produtos.length + 1;
    const novoProduto = { id, nome, preco};
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
})

app.listen(port, () => console.log(`rodando no link http://127.0.0.1:${port}`));

app.put("/produtos/:id",(req,res) => {
  const id = Number(req.params.id);
  const {nome, preco} = req.body;
  const index = produtos.findIndex(el => el.id === id);
  
  if(index !== -1){
produtos[index] = {...produtos[index], nome, preco};
res.json(produtos[index])
  }else{
    res.status(404).json({error: "Product not Found"});
  }

})
app.delete("/produtos/:id",(req,res) =>{
  const id = Number(req.params.id);
  produto = produtos.filter(el => el.id !==id);
  res.sendStatus(204);
})