const express = require("express");
const {Router} = require("express");
const {controladoresApi} = require("../controllers/controladoresApi.js");

const routerApiProductos = new Router();
routerApiProductos.use(express.json());
routerApiProductos.use(express.urlencoded({extended:true}));

routerApiProductos.get("/api/productos", controladoresApi.getAll);
routerApiProductos.get("/api/productosById/:id", controladoresApi.getById);

module.exports = {routerApiProductos};