import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 2,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems.includes(itemId)) return;
      state.cartItems = [...state.cartItems, itemId];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId.id);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  toggleFavorite,
  addToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
