const express = require('express');
const router = new express.Router();

const ejemplo = require('../controllers/ejemplo')

//AUTENTICACION
router.route('/jornadas').get(ejemplo.obtenerJornadas)

module.exports = router