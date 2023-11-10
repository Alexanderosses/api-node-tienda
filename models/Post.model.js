const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    URL: { type: String },
    DESCRIPCION: { type: String },
    PRECIO: { type: Number },
    PRECIO_OFERTA: { type: Number },
    DESCUENTO: { type: Number },
    PESO: { type: Number },
    MARCA: { type: String },
    MODELO: { type: String },
    IMG: { type: String },
    BATERIA: { type: String },
    MOTOR: { type: String },
    CARGA_MAX: { type: Number },
    TIEMPO_DE_CARGA: { type: Number },
    VELOCIDAD_MAX: { type: Number },
    AUTONOMIA: { type: Number },
    LUCES: { type: String },
    SUSPENSION: { type: String },
    FRENOS: { type: String },
    NEUMATICO: { type: String },
    MEDIDAS_DESPLEGADO: { type: String },
    MEDIDA_PLEGADO: { type: String },
    PENDIENTE: { type: Number },
    MATERIAL_DEL_PRODUCTO: { type: String },
    DISPLAY: { type: String },
    category: { type: mongoose.ObjectId, ref: 'Category' },
    user: { type: mongoose.ObjectId, ref: 'User' }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post