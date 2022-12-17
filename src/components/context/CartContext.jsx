import React, {useState, createContext} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id);
        setCart([...products]);
    }

    const clear = () => {
        setCart([]);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0);
    }

    const sumTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;