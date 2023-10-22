const db = require('../models') // deixar models para poder pegar todos os arquivos da pasta

// criando o modelo principal

const Product = db.products

//1.Criar o produto

const adicionarProduto = async (req,res)=>{
    let info = {
        titulo: req.body.titulo,
        preco: req.body.preco,
        descricao: req.body.descricao
    }
    const product = await Product.create(info) // vai criar o produto com base na informação
    res.status(200).send(product)
}

//2.selecionar todos produtos

const selecionarProdutos = async(req,res)=>{
    let products = await Product.findAll({})
    res.send(products).status(200)
}

// 3.selecionar produto
const  selecionatProduto = async(req,res)=>{
    let id = req.params.id
    let product = await Product.findOne({where: {id:id}})
    res.status(200).send(product)
}

// 4.Atualizar Produto

const atualizarProduto = async(req,res)=>{
    let id = req.param.id
    const product = await Product.update(req.body, {whre:{id:id}})
    res.status(200).send(product)
}

// 5. deletar produto

const deletarProduto = async(req,res)=>{
    let id = req.params.id
    const product = await Product.destroy({whre:{id:id}})
    res.staus(200).send(`Produto deletado`)
}

module.exports = adicionarProduto,
selecionarProdutos,
selecionatProduto,
atualizarProduto,
deletarProduto