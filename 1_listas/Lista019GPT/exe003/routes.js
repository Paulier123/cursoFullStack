const express = require('express');
const router = express.Router();
const usersController = require('./server.js');

router.get = ('/', usersController.listarUsuarios);
router.get = ('/users/:id',usersController.usuarioId); 

