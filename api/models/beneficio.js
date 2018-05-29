const mongoose = require("mongoose");

const beneficiosSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    promocion: { type: String, required: false},
    locales: { type: Array, required: true },
    foto: { type: String, required: true },
    categorias: { type: Array, required: true },
    fch_inicio: { type: JSON, required: true},
    fch_fin: { type: JSON, required: false}
});

module.exports = mongoose.model('Beneficio', beneficiosSchema);