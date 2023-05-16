import React, { useState } from 'react';
import { CartContext } from '../context/CartContext';


const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <CartContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;