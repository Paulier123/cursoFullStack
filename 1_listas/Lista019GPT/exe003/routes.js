const express = require('express');
const app=express
const router = express.Router();
const usersController = require('./server.js');

router.get = ('/', usersController.listarUsuarios);
router.get = ('/users/:id',usersController.usuarioId); 
router.post = ('/users',usersController.adicionaUsuarios)

