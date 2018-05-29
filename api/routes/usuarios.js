const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Usuario = require('../models/usuario');

router.get('/', (req, res, next) => {
    
    Usuario.find().select('-__v').exec().then((docs) => {
        console.log(docs);
        const response = {
            count: docs.length,
            usuarios: docs
        };
        res.status(200).json(response)
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: err })
    });
});

router.post('/', (req, res, next) => {
    const usuario = new Usuario({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        mail: req.body.mail,
        contraseña: req.body.contraseña,
        numeroVerificacion: req.body.numeroVerificacion,
        estado: req.body.estado
    });

    usuario.save().then((result) => {
        console.log(result);
        res.status(201).json({
            message: 'El usuario fue creado!',
            usuarioCreado: usuario
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: err })
    });
});

module.exports = router;