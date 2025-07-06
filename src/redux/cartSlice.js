import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, quantity: 1 };
        state.totalCount += 1;
        state.totalPrice += item.price;
      }
    },
    increase: (state, action) => {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalCount += 1;
      state.totalPrice += state.items[id].price;
    },
    decrease: (state, action) => {
      const id = action.payload;
      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalCount -= 1;
        state.totalPrice -= state.items[id].price;
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state.totalCount -= state.items[id].quantity;
      state.totalPrice -= state.items[id].price * state.items[id].quantity;
      delete state.items[id];
    },
  }
});

export const { addToCart, increase, decrease, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
