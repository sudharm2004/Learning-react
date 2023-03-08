import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    restaurantId: null,
    items: [],
    totalItems: 0,
    //Whether items should be updated i,e it 0 if we are ordering from another restaurant
    updateItems: 1,
    resCloudinaryImageId: null,
    resName: null,
  },
  reducers: {
    addCartItem: (state, action) => {
      // console.log("add cart item called");
      // find is a method that returns the first element that matches the given condition

      // console.log(action.payload);

      if (state.restaurantId != null) {
        if (action.payload.restaurantId == state.restaurantId) {
          const isItemPresent = state.items.find(
            (element) => element.id == action.payload.menu.id
          );

          if (isItemPresent) {
            state.items.forEach((element, index) => {
              if (element.id === action.payload.menu.id) {
                state.items[index] = {
                  ...action.payload.menu,
                  itemCount: element.itemCount + 1,
                };
              }
            });
          } else {
            state.items.push({ ...action.payload.menu, itemCount: 1 });
          }
          state.totalItems++;
        } else {
          // console.log("cannot add the item");
          state.updateItems = 0;
        }
      } else {
        state.restaurantId = action.payload.restaurantId;
        state.resCloudinaryImageId = action.payload.resCloudinaryImageId;
        state.resName = action.payload.resName;
        state.items.push({ ...action.payload.menu, itemCount: 1 });
        state.totalItems++;
      }
      // console.log("update Items in cartslice " + state.updateItems);
    },
    removeCartItem: (state, action) => {
      // console.log("remove cart item called");
      state.items.forEach((element, index) => {
        console.log(element);
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
      if (state.totalItems == 0) {
        state.restaurantId = null;
        state.resCloudinaryImageId = null;
        state.resName = null;
      }
    },
    clearCart: (state, action) => {
      // console.log("clearCart");
      state.items = [];
      state.updateItems = 1;
      state.totalItems = 0;
      state.restaurantId = null;
      state.restaurantId = null;
      state.resName = null;
    },
    toggleUpdateItems: (state) => {
      if (state.updateItems) {
        state.updateItems = 0;
      } else {
        state.updateItems = 1;
      }
    },
  },
});

export const { addCartItem, clearCart, removeCartItem, toggleUpdateItems } =
  cart.actions;

export default cart.reducer;
