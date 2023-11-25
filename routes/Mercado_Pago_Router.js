const { Router } = require("express");
const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();
const Mercado_Pago = Router();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKE || "",
  client_id: process.env.CLIENT_ID || "",
  client_secret: process.env.CLIENT_SECRET || "",
});

Mercado_Pago.post("/", async (req, res) => {
  const product = req.body;
  try {
    const preference = {
      items: [
        {
            title: product.marca,
            title: product.modelo,
            unit_price: product.precioOferta,
            currency_id: "CLP",
            quantity: 1,
            //quantity: product.cantidad,
            //title: "xxxx",            
            //unit_price: 2500,
            //picture_url: "https://alexanderosses.cl/img/catalogo/Thunder-3.webp",            
            //description: "esto es una descripcion del producto Dualtron X",           
        },
      ],
      back_urls: {
        success: "https://alexanderosses.github.io/TIENDA-EN-LINEA/#/Modelos",
        failure: "https://alexanderosses.github.io/TIENDA-EN-LINEA/#/Modelos",
      },
      auto_return: "approved",
    };

    const respuesta = await mercadopago.preferences.create(preference);
    console.log(respuesta);
    res.status(200).json(respuesta.response.init_point);
    } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

module.exports = Mercado_Pago;