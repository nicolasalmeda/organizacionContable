const express = require("express");
const app = express();

const {routerApiProductos} = require("./routers/routerApiProductos.js");





app.use(routerApiProductos);



const port = 3001;
app.listen(port, () => {
    console.log('Escuchando en el puerto: ', port);
})