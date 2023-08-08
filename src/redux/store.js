import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./slices/Cartslice";


const store = configureStore({
    reducer:{
        cart: Cartslice,
    }
});

export default store;
