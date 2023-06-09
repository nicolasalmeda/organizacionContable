const pedidos = [ 
  {id: 1,
  cart: [
    {
      id: '36a87d0a-e68e-46cd-9fee-e6d364116076',
      brands: 'Samsung',
      name: 'Samsung Galaxy A03',
      price: 30499,
      weight: 211,
      height: 16.42,
      ram: 4,
      storage: 64,
      camera: 48,
      display: 6.5,
      batery: 5000,
      description: 'Ampliá tu visión con la pantalla Infinity-V de 6,5 pulgadas de Galaxy A03 Core y mira lo que te estuviste perdiendo. Gracias a la tecnología HD+, tus contenidos cotidianos se ven mejor: nítidos, definidos y claros',
      image: 'https://medias.musimundo.com/medias/00505029-145305-145305-01-145305-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MzM4NXxpbWFnZS9qcGVnfGgyZC9oOTUvMTAzODE1MTM0OTA0NjIvMDA1MDUwMjktMTQ1MzA1LTE0NTMwNV8wMS0xNDUzMDVfMDEuanBnX3NpemU1MTV8N2EzYTBhMmVkNDg0NjQyNGJjZmFmZmI0MzY5MjEyMjhjNzZkM2ZkM2UxY2YyMjg4Yjc2NDIyYTU1OTczYjIyYw',
      quantity: 5,
      stock: true,
      cantidad: 1
    }
  ],
  precioTotal: 30499,
  envio: false,
  fecha: '9/6/2023'
},
{id: 2,
  cart: [
    {
      id: '36a87d0a-e68e-46cd-9fee-e6d364116076',
      brands: 'Samsung',
      name: 'Samsung Galaxy A03',
      price: 30499,
      weight: 211,
      height: 16.42,
      ram: 4,
      storage: 64,
      camera: 48,
      display: 6.5,
      batery: 5000,
      description: 'Ampliá tu visión con la pantalla Infinity-V de 6,5 pulgadas de Galaxy A03 Core y mira lo que te estuviste perdiendo. Gracias a la tecnología HD+, tus contenidos cotidianos se ven mejor: nítidos, definidos y claros',
      image: 'https://medias.musimundo.com/medias/00505029-145305-145305-01-145305-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MzM4NXxpbWFnZS9qcGVnfGgyZC9oOTUvMTAzODE1MTM0OTA0NjIvMDA1MDUwMjktMTQ1MzA1LTE0NTMwNV8wMS0xNDUzMDVfMDEuanBnX3NpemU1MTV8N2EzYTBhMmVkNDg0NjQyNGJjZmFmZmI0MzY5MjEyMjhjNzZkM2ZkM2UxY2YyMjg4Yjc2NDIyYTU1OTczYjIyYw',
      quantity: 5,
      stock: true,
      cantidad: 1
    }
  ],
  precioTotal: 30499,
  envio: false,
  fecha: '9/6/2023'
}
];



const dataBasePedidos = {
  
  pedidos: pedidos,

  obtenerPedidos: () =>{
    return [...pedidos]
  },
  
  agregarPedidos: (order) => {
    
    try{

      const newOrder={
        id: pedidos.length + 1,
        cart: order.cart,
        precioTotal: order.precioTotal,
        envio: order.envio,
        fecha: order.fecha
      }
      
      console.log('ESTO ES NEW ORDER',newOrder)
      pedidos.push(newOrder);
      console.log(pedidos)
      return console.log('Pedido agregado');
      
    }catch(error){
      console.log('ERROR', error)
    }
    },

    
    
}

module.exports = {dataBasePedidos,pedidos}