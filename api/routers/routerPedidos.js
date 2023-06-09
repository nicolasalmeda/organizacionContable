const express = require("express");
const {Router} = require("express");
const {controladoresPedidos} = require("../controllers/controladoresPedidos.js");

const routerPedidos = new Router();
routerPedidos.use(express.json());
routerPedidos.use(express.urlencoded({extended: true}));

routerPedidos.post("/api/pedidos",controladoresPedidos.addPedido);
routerPedidos.get("/api/pedidos",controladoresPedidos.getPedidos);

module.exports={routerPedidos};