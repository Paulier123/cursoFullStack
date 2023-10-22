const productControler = require('../controller/productControler')
const router = require('express').Router()


router.post('/adicionarProduto', productControler.adicionarProduto)
router.get('/selecionarProdutos', productControler.selecionarProdutos)
router.get('/:id', productControler.selecionatProduto)
router.put('/:id', productControler.atualizarProduto)
router.delete('/:id', productControler.deletarProduto)

module.exports = router