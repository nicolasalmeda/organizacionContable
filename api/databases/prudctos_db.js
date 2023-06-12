const {generarId} = require('../Utils/Utils')
const products = [
    {
      id: "36a87d0a-e68e-46cd-9fee-e6d364116076",
      brands: "Samsung",
      name: "Samsung Galaxy A03",
      price: 30499,
      weight: 211,
      height: 16.42,
      ram: 4,
      storage: 64,
      camera: 48,
      display: 6.5,
      batery: 5000,
      description:
        "Ampliá tu visión con la pantalla Infinity-V de 6,5 pulgadas de Galaxy A03 Core y mira lo que te estuviste perdiendo. Gracias a la tecnología HD+, tus contenidos cotidianos se ven mejor: nítidos, definidos y claros",
      image:
        "https://medias.musimundo.com/medias/00505029-145305-145305-01-145305-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MzM4NXxpbWFnZS9qcGVnfGgyZC9oOTUvMTAzODE1MTM0OTA0NjIvMDA1MDUwMjktMTQ1MzA1LTE0NTMwNV8wMS0xNDUzMDVfMDEuanBnX3NpemU1MTV8N2EzYTBhMmVkNDg0NjQyNGJjZmFmZmI0MzY5MjEyMjhjNzZkM2ZkM2UxY2YyMjg4Yjc2NDIyYTU1OTczYjIyYw",
      quantity: 10,
      stock: true,
    },
    {
      id: "560dea18-3455-49fe-b43e-e584ecfde517",
      brands: "Samsung",
      name: "Samsung Z Fold3 Negro",
      price: 399999,
      weight: 271,
      height: 16.64,
      ram: 12,
      storage: 256,
      camera: 12,
      display: 7.6,
      batery: 4400,
      description:
        "La pantalla principal está hecha de vidrio ultradelgado Samsung, el mayor salto en nuestra tecnología de pantalla plegable. Con la adición de una capa de panel y una película protectora, es un 80 % más duradera que antes.",
      image:
        "https://medias.musimundo.com/medias/00434005-144167-144167-01-144167-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wzMzEzNXxpbWFnZS9qcGVnfGgwYS9oMTgvMTAzODA4ODg1MDYzOTgvMDA0MzQwMDUtMTQ0MTY3LTE0NDE2N18wMS0xNDQxNjdfMDEuanBnX3NpemU1MTV8MmEzOTU2MDY4MWE1NzNiYjJjNWZiMTc3MmQwMzEyNDIxZmU2ZDE1ODA0NmQ4YjJhZTk5MzFmNDUwZDc0MDQ2ZQ",
      quantity: 6,
      stock: true,
    },
    {
      id: "0d737b80-9547-4a15-ba6f-8128e55b6dfa",
      brands: "Samsung",
      name: "Samsung Z Fold3 Plata",
      price: 399999,
      weight: 271,
      height: 16.64,
      ram: 12,
      storage: 256,
      camera: 12,
      display: 7.6,
      batery: 4400,
      description:
        "Resistencia, tranquilidad y confianza. La estructura de este increíble teléfono consiste en un marco de aluminio Armor increíblemente resistente, pero liviano. Además, es un 10 % más duradero para proteger las partes interiores de la bisagra, como si fuera una armadura.",
      image:
        "https://medias.musimundo.com/medias/00434006-144168-144168-01-144168-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wzMzUxMHxpbWFnZS9qcGVnfGg2NS9oMDkvMTAzODA4ODg5OTc5MTgvMDA0MzQwMDYtMTQ0MTY4LTE0NDE2OF8wMS0xNDQxNjhfMDEuanBnX3NpemU1MTV8YmFkNGNiMzQ3MmE2MjhiMDhkOTMyZDBmZDI5NTM4MTNmYzkxNjg2MTM4ZDUyOTM5Nzg4YzZjNzBkMzU3N2NjYw",
      quantity: 5,
      stock: true,
    },
    {
      id: "8c18fb1e-fc98-4194-9abb-010fcbe7e853",
      brands: "Samsung",
      name: "Samsung Galaxy Z Flip 3 5g",
      price: 399999,
      weight: 271,
      height: 16.64,
      ram: 8,
      storage: 128,
      camera: 12,
      display: 6.7,
      batery: 3300,
      description:
        "La pantalla principal está hecha de vidrio ultradelgado Samsung, el mayor salto en nuestra tecnología de pantalla plegable. Con la adición de una capa de panel y una película protectora, es un 80 % más duradera que antes y soporta hasta 200 000 pliegues.",
      image:
        "https://medias.musimundo.com/medias/00460019-144679-144679-01-144679-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjAwN3xpbWFnZS9qcGVnfGg0Mi9oNzQvMTAzODExMjUxNTY4OTQvMDA0NjAwMTktMTQ0Njc5LTE0NDY3OV8wMS0xNDQ2NzlfMDEuanBnX3NpemU1MTV8ZTIwOGU0NjkyZjVhMThkMzUyNWRmZjNhNmI3NzRiNGYwYTUxMWYzOGU3MTQ3MTQ1NzE1YTgwZTAxMTI5Yjg3Ng",
      quantity: 7,
      stock: true,
    },
    {
      id: "c858b340-667a-4821-a93e-312930c607cf",
      brands: "Samsung",
      name: "Samsung Galaxy A13",
      price: 53999,
      weight: 195,
      height: 16.51,
      ram: 4,
      storage: 128,
      camera: 50,
      display: 6.6,
      batery: 5000,
      description:
        "Integrado en el hardware y el software del smartphone desde el principio, Samsung Knox protege su smartphone desde el momento en que se enciende. Ofreciendo seguridad de múltiples capas, defiende tu información más confidencial del malware y las amenazas maliciosas.",
      image:
        "https://medias.musimundo.com/medias/00543008-146078-146078-01-146078-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w5MTUzMXxpbWFnZS9qcGVnfGhlYi9oNDIvMTAzOTA4NTc4MDk5NTAvMDA1NDMwMDgtMTQ2MDc4LTE0NjA3OF8wMS0xNDYwNzhfMDEuanBnX3NpemU1MTV8NzY3YzJiYjY4MTczNTg2MDQ1NWM0OGVkYmI4ODg2ZDMyYTU4YWE4YTJkNTBhMjA4ZWUyZmU5ODg0NjJjZGViNQ",
      quantity: 0,
      stock: false,
    },
    {
      id: "008547f4-4aed-4044-9309-5b92b2c6ce90",
      brands: "Samsung",
      name: "Samsung Galaxy A13 Negro",
      price: 53999,
      weight: 195,
      height: 16.51,
      ram: 4,
      storage: 128,
      camera: 50,
      display: 6.6,
      batery: 5000,
      description:
        "Integrado en el hardware y el software del smartphone desde el principio, Samsung Knox protege su smartphone desde el momento en que se enciende. Ofreciendo seguridad de múltiples capas, defiende tu información más confidencial del malware y las amenazas maliciosas.",
      image:
        "https://medias.musimundo.com/medias/00543007-146077-146077-01-146077-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w4NjkyN3xpbWFnZS9qcGVnfGg1MC9oODUvMTAzOTA2NTE5Mjg2MDYvMDA1NDMwMDctMTQ2MDc3LTE0NjA3N18wMS0xNDYwNzdfMDEuanBnX3NpemU1MTV8ZDMzMGNjNTZiNTI0Yjg2NjA0NGJmNGU5ZWZjNGZhYWJkNTVmYmNmZTAyMWZkNGIwYTU2OTU0NzI5YWE5ZjY0ZA",
      quantity: 15,
      stock: true,
    }
    
    
    
];



const databaseProductos = {
  products:products,

    getById : (id) => {
        let obj = products.find(obj => obj.id === id);
        if(!obj){
            const error = new Error("producto no encontrado");
            error.tipo = "db not found";
            throw error;
        } else {
            return obj
        }
    },

    getAll : () => {
        return [...products];
    },

    editarProduct: (cart) => {
      try{
        for(i=0; i<cart.length;i++){
          for(j=0;j<products.length;j++){
            if(cart[i].id === products[j].id){
              console.log('Antes: ',products[j].quantity)
              products[j].quantity= products[j].quantity - cart[i].cantidad
              console.log('Despues: ',products[j].quantity)
            }
          }
        }
      }catch(error){ console.log('ERROR: ',error)}
    
    },

crearProduct : (data) => {
  try{
    const newProduct= {
      id: generarId(),
      ...data
    }

    products.push(newProduct);
  }catch(error){
    console.log('ERROR: ',error)
  }
},
editarProductById: (id, updatedProduct) => {
  const productIndex = products.findIndex(obj => obj.id === id);
  if (productIndex === -1) {
    const error = new Error("Producto no encontrado");
    error.tipo = "db not found";
    throw error;
  } else {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    return products[productIndex];
  }
}


}

module.exports = {databaseProductos,products};