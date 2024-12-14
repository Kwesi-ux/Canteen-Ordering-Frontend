import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState(null); // State to manage authentication token

    const addToCart = (itemId) => {
        const parsedId = parseInt(itemId); // Ensure the item ID is an integer
        if (!cartItems[parsedId]) {
            setCartItems((prev) => ({ ...prev, [parsedId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [parsedId]: prev[parsedId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        const parsedId = parseInt(itemId);
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[parsedId] > 1) {
                newCartItems[parsedId] -= 1;
            } else {
                delete newCartItems[parsedId];
            }
            return newCartItems;
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product.food_id === parseInt(item));
                if (itemInfo) {
                    totalAmount += itemInfo.food_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken, // Expose setToken for authentication management
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
