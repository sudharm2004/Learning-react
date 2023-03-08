import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import geoLocationSlice from "./GeoLocationSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    geoLocation: geoLocationSlice,
  },
});

export default store;
