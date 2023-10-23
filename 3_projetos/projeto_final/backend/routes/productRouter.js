
const  express = require('express')
const productControler = require('../controller/productControler')
const router = express.Router()

router.get('/selecionarProdutos', productControler.selecionarProdutos)
router.get('/:id', productControler.selecionatProduto)
router.post('/adicionarProduto', productControler.adicionarProduto)
router.put('/:id', productControler.atualizarProduto)
router.delete('/:id', productControler.deletarProduto)

module.exports = router