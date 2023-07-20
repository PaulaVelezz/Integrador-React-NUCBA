export const addItemTCart = (cartItems, product) => {
    
    const productInCart = cartItems.find((item) => {
        return item.id === product.id
    });

    if (productInCart) {
        return cartItems.map((item) => {
            return item.id === productInCart.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
    }

    return [
        ...cartItems,
        {
            ...product,
            quantity: 1,
        },
    ];
};

////////////////////////////////////////////

export const removeItemFCart = (cartItems, id) => {
    
    const removingProduct = cartItems.find ((item) => {
        return item.id === id;
    });

    if (removingProduct.quantity > 1 ) {
        return cartItems.map ((item) => {
            return item.id === removingProduct.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
    }

    return cartItems.filter ((item) => {
        return item.id !== removingProduct.id;
    });
};