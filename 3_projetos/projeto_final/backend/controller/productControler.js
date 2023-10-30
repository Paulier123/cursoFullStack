const db = require('../models') // deixar models para poder pegar todos os arquivos da pasta

// criando o modelo principal

const Product = db.products

//1.Criar o produto


const productController = { //sempre criar uma variável ...controller e dentro dela informar os produtos, teitei fazer cada produto com uma variáve, mas o node gerou erros dizendo que a o Router.get dentro do arquivo de roteamento precisa de uma callback e tinha um objeto indefinido.
 adicionarProduto : async (req,res)=>{

    let info = {
        descricao: req.body.descricao,
        valor: req.body.valor,
        data: req.body.data
    }
    const product = await Product.create(info) // vai criar o produto com base na informação
    res.status(200).send(product)
},

//2.selecionar todos produtos

selecionarProdutos : async(req,res)=>{
    let products = await Product.findAll({})
    res.send(products).status(200) 
},

// 3.selecionar produto
 selecionatProduto : async(req,res)=>{
    let id = req.params.id
    let product = await Product.findOne({where: {id:id}})
    res.status(200).send(product)
},

// 4.Atualizar Produto

 atualizarProduto : async(req,res)=>{
    let id = req.params.id
    const product = await Product.update(req.body, {where:{id:id}})
    res.status(200).send(product)
},

// 5. deletar produto

 deletarProduto: async(req,res)=>{
    let id = req.params.id
    const product = await Product.destroy({where:{id:id}})
    res.status(200).send(`Produto ${product} deletado`)
}
}

module.exports = productController