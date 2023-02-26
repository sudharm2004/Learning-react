import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addCartItem: (state, action) => {
      // find is a method that returns the first element that matches the given condition
      const isItemPresent = state.items.find(
        (element) => element.id == action.payload.id
      );

      if (isItemPresent) {
        state.items.forEach((element, index) => {
          if (element.id === action.payload.id) {
            state.items[index] = {
              ...action.payload,
              itemCount: element.itemCount + 1,
            };
          }
        });
      } else {
        state.items.push({ ...action.payload, itemCount: 1 });
      }
      state.totalItems++;
    },
    removeCartItem: (state, action) => {
      state.items.forEach((element, index) => {
        if (element.id === action.payload.id) {
          state.items[index] = {
            ...action.payload,
            itemCount: element.itemCount - 1,
          };
          // if last element is removed then the item should be removed from array
          if (state.items[index].itemCount == 0) {
            state.items.splice(index, 1);
          }
        }
      });
      state.totalItems--;
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addCartItem, clearCart, removeCartItem } = cart.actions;

export default cart.reducer;
