const {databaseProductos} = require("../databases/prudctos_db.js");

const controladoresApi = {
    getAll:  (req,res) => {
        try{

            const allProducts = databaseProductos.getAll();
            // console.log(allProducts);
            res.json(allProducts);
        } 
        catch(error){
            res.status(404).json({error: error.message});
        }
    },

    getById : (req,res) => {
        const id = req.params.id;
        try{
            const obj = databaseProductos.getById(id);
            console.log(obj);
            res.json(obj);
        }catch(error){
            res.status(404).json({error : error.message});
        }
    },

    editProduct : (req,res) => {
        const cart = req.body;
        try{
            const productoEditado = databaseProductos.editarProduct(cart);
            res.json(productoEditado);
            return console.log(productoEditado);


        }catch(error){
            res.status(404).json({error: error.message})
        }
    },
    
    createProduct : (req,res) => {
        const data = req.body;
        try{
            const productoCreado = databaseProductos.crearProduct(data);
            res.json(productoCreado);
            return  res.status(200).json({message: 'Producto agregado'});
        }catch(error){
            res.status(404).json({error: error.message})
        }
    },

    editProductById : (req,res) => {
        const id = req.params.id;
        const data = req.body;
        console.log(data);
        try{
            const productUpdated = databaseProductos.editarProductById(id,data);
            res.json(productUpdated);
            return res.status(200).json({message: 'Producto actualizado'});
        }catch(error){
            res.status(404).json({error: error.message})
            console.log(error);
        }
    },

    deleteProductById : (req,res) => {
        const id = req.params.id;
        console.log(id);
        try{
            const deleteProduct = databaseProductos.eliminarById(id);
            res.sendStatus(204)
        }catch(error){
            if (error.tipo === "db not found") {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: error.message });
            } 
        }
    }

}

module.exports ={controladoresApi};