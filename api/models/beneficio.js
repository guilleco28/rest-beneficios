const mongoose = require("mongoose");

const beneficiosSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    descuento: { type: Number, required: true }
});

module.exports = mongoose.model('Beneficio', beneficiosSchema);