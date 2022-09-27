import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 0,
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
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      console.log(state.amount);
      state.amount = amount;
      console.log(state.amount);
      state.total = total;
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
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
