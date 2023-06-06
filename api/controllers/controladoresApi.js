const {databaseProductos} = require("../databases/prudctos_db.js");

const controladoresApi = {
    getAll:  (req,res) => {
        try{

            const allProducts = databaseProductos.getAll();
            console.log(allProducts);
            res.json(allProducts);
        } 
        catch(error){
            res.status(404).json({error: error.message});
        }
    },

    getById : (req,res) => {
        const id = req.params.id;
        try{
            const obj = databaseProductos.getById(Number(id));
            console.log(obj);
            res.json(obj);
        }catch(error){
            res.status(404).json({error : error.message});
        }
    }
}

module.exports ={controladoresApi};