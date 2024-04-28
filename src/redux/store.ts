import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterslice";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzasSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: { filter, cart, pizza },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();
