require('dotenv').config()
const express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes')
const app = express()
const cors = require('cors')

//*- Importacion De Rutas :
const Mercado_Pago = require("./routes/Mercado_Pago_Router");

const corsOptions = {
    origin: '*', // Reemplaza esto con el dominio permitido
    methods: 'GET,PUT,POST,DELETE',
    credentials: true, // Permite el envío de cookies o credenciales
    optionsSuccessStatus: 204, // Configura el código de respuesta para las solicitudes OPTIONS
};

app.use(cors(corsOptions))
app.use(express.json())
app.use("/Mercado_Pago", Mercado_Pago);

mongoose.connect(process.env.MONGO_URI)

app.use('/v1', routes)

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto ' + process.env.PORT)
})