import React, { useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';


const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [itemsAmount, setItemsAmount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const amount = cart.reduce((a, c) => {
            return a + c.amount;
        }, 0)

        setItemsAmount(amount)
    }, [cart])


    useEffect(() => {
        const total = cart.reduce((a, c) => {
            return a + c.attributes.price * c.amount;
        }, 0)

        setTotal(total)
    }, [cart])

    console.log(total)


    const addToCart = (item, id) => {
        const itemId = parseInt(id)
        // console.log('added To Cart')
        const newItem = { ...item[0], amount: 1 };
        // console.log(newItem)
        setCart([...cart, newItem])

        const cartItem = cart.find((item) => {
            return item.id === itemId
        })

        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === itemId) {
                    setAmount(cartItem.amount + 1);
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }

        setIsOpen(true)
    }


    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id
        })

        setCart(newCart)
    }

    const handleInput = (e, id) => {
        const value = parseInt(e.target.value)

        const cartItem = cart.find(item => {
            return item.id === id;
        })

        // console.log(cartItem)

        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    if (isNaN(value)) {
                        setAmount(1)
                        return { ...item, amount: 1 }
                    } else {
                        setAmount(value);
                        return { ...item, amount: value }
                    }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
        setIsOpen(true)
    }

    // console.log(cart)

    return (
        <CartContext.Provider
            value={{
                isOpen,
                setIsOpen,
                addToCart,
                cart,
                amount,
                itemsAmount,
                removeFromCart,
                handleInput,
                total
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;