const express = require('express')
const router = express.Router();
const usuarioscontroller = require('./server')
router.get('/', usuarioscontroller.listarUsuarios)
router.get('/about', usuarioscontroller.infPagina)
router.get('/',usuarioscontroller.contato)



