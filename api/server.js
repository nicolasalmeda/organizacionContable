const express = require("express");
const app = express();

const {routerApiProductos} = require("./routers/routerApiProductos.js");

app.use(express.json);
app.use(express.urlencoded({extended:true}));


app.use(routerApiProductos);

app.get("/", (req,res) => {
    res.send("Hola Mundo!");
})

const port = 3000;
app.listen(port, () => {
    console.log('Escuchando en el puerto: ', port);
})