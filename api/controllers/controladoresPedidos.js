const {dataBasePedidos} = require('../databases/pedidos_db.js')

const controladoresPedidos = {
  addPedido: (req,res) => {
    const order = req.body;
    try{
      dataBasePedidos.agregarPedidos(order);
      return res.status(200).json({message: 'Pedido agregado'});

    }catch(error){
      res.status(404).json({error: error.message})
    }
  },

  getPedidos : (req,res) => {
    try{
        const allPedidos = dataBasePedidos.obtenerPedidos();
        console.log(allPedidos);
        res.json(allPedidos);
    }catch(error){
        res.status(404).json({error: error.message});
    }
}
}

module.exports={controladoresPedidos}