export const addItem = (id, allProducts,cart) => {
    const newProduct = allProducts.find((p) => p.id === id.idtelefono) || cart.find((p) => p.id === id.idtelefono);

    if(!newProduct){
        return [...cart]
    }

    const productExist = cart.find((item) => item.id === newProduct.id)

    if(!productExist){
        return [...cart,{...newProduct,cantidad: 1}];
    } else {

      return cart.map((e) => e.id === newProduct.id 
      ? {...e , cantidad: e.cantidad + 1 }
      : e)

    }
}

export const deleteItem = (payload, cart) => {
    // console.log(cart);
    // console.log(payload);
    const itemToDelete = cart.find(
      (item) => item.id === payload.idtelefono 
    );
    return itemToDelete.cantidad > 1
      ? cart.map((item) =>
          item.id === payload.idtelefono
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
      : cart.filter((item) => item.id !== payload.idtelefono);
  };
  
  export const deleteAllItem = (cart, id) => {
    return cart.filter((item) => item.id !== id);
  };