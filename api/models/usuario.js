const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: { type: String, required: true },
    mail: { type: String, required: true },
    contraseña: { type: String, required: true},
    numeroVerificacion: { type: String, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('Usuario', usuariosSchema);