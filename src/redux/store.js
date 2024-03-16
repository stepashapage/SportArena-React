import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterslice";

export const store = configureStore({
    reducer: { filter },
});
