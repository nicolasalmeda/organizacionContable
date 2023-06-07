export const addItem = (id, allProducts,cart) => {
    const newProduct = allProducts.find((p) => p.id === id.idtelefono) || 
    cart.find((p) => p.id === id.idtelefono);

    if(!newProduct){
        return [...cart]
    }

    const productExist = cart.find((item) => item.id === newProduct.id)

    if(!productExist){
        return [...cart,{...newProduct,cantidad: 1}];
    }

    return cart.map((e) => e.id === newProduct.id)
}