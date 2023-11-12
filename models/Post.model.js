const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    // Información del producto
    descripcion: { type: String, required: true }, // Descripción del producto
    precio: { type: Number, required: true }, // Precio del producto
    precioOferta: { type: Number }, // Precio en oferta (opcional)
    descuento: { type: Number, min: 0, max: 100 }, // Descuento aplicado (en porcentaje)

    // Especificaciones técnicas
    peso: { type: Number }, // Peso del producto
    marca: { type: String }, // Marca del producto
    modelo: { type: String }, // Modelo del producto
    img: { type: String }, // URL de la imagen del producto

    // Detalles adicionales
    bateria: { type: String }, // Tipo de batería
    motor: { type: String }, // Tipo de motor
    cargaMax: { type: Number }, // Carga máxima que soporta el producto
    tiempoDeCarga: { type: Number }, // Tiempo de carga de la batería
    velocidadMax: { type: Number }, // Velocidad máxima del producto
    autonomia: { type: Number }, // Autonomía de la batería

    // Características adicionales
    luces: { type: String }, // Tipo de luces
    suspension: { type: String }, // Tipo de suspensión
    frenos: { type: String }, // Tipo de frenos
    neumatico: { type: String }, // Tipo de neumático

    // Dimensiones y plegado
    medidasDesplegado: { type: String }, // Medidas cuando el producto está desplegado
    medidaPlegado: { type: String }, // Medidas cuando el producto está plegado

    // Otros detalles
    pendiente: { type: Number }, // Pendiente máxima que puede subir el producto
    materialDelProducto: { type: String }, // Material del que está hecho el producto
    display: { type: String }, // Tipo de pantalla o display (si aplica)
},
{ timestamps: true });

const Post = mongoose.model('Post', postSchema)

module.exports = Post