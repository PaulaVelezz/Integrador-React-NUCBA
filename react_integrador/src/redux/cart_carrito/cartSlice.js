import {createSlice} from "@reduxjs/toolkit";
import { addItemTCart, removeItemFCart } from "./cart-utils";


const INITIAL_STATE = {
    cartItems: [],
    hidden: true,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        // agregar producto al carrito
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemTCart(state.cartItems, action.payload),
            };
        },
        // eliminar producto del carrito
        removeFCart : (state, action) => {
            return {
                ...state,
                cartItems: removeItemFCart(state.cartItems, action.payload),
            };
        },
        // vaciar todo el carrito
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
            };
        },
        // toggle de carrito
        toggleCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            };
        },
    },
});

export const {addToCart, removeFCart, clearCart, toggleCart} = cartSlice.actions;
export default cartSlice.reducer;