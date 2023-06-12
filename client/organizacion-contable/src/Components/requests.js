import axios from "axios";

  export async function createProduct(product, data) {

    if(!product){
        throw new Error("Error al crear el producto!")
    }

    data = {...data, id: undefined};
    await axios.post('http://localhost:3001/api/createProductos',data)

    
}

export async function updateProduct(product, data) {

    if(!product){
        throw new Error("Error al modificar el producto!")
    }
    
    await axios.put('http://localhost:3001/api/editarProductosById/'+ data.id, data) 
}
