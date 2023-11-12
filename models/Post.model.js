const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    descripcion: { type: String },
    precio: { type: Number }, 
    precioOferta: { type: Number }, 
    descuento: { type: Number, min: 0, max: 100 }, 
    peso: { type: Number },
    marca: { type: String },
    modelo: { type: String },
    img: { type: String },
    bateria: { type: String }, 
    motor: { type: String }, 
    cargaMax: { type: Number }, 
    tiempoDeCarga: { type: Number }, 
    velocidadMax: { type: Number },
    autonomia: { type: Number }, 
    luces: { type: String },
    suspension: { type: String },
    frenos: { type: String },
    neumatico: { type: String },
    medidasDesplegado: { type: String },
    medidaPlegado: { type: String },
    pendiente: { type: Number },
    materialDelProducto: { type: String },
    display: { type: String },
},
{ timestamps: true });

const Post = mongoose.model('Post', postSchema)

module.exports = Post