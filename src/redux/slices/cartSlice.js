import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    TotalPrice: 0,
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
            state.TotalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },
        removeItems(state, action) {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload
            );
        },
        clearItems(state) {
            state.items = [];
            state.TotalPrice = 0;
        },
        minusItem(state, action) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload
            );
            if (findItem) {
                findItem.count--;
            }
        },
    },
});

export const selectCart = (state) => state.cart;

export const { addItems, removeItems, clearItems, minusItem } =
    cartSlice.actions;

export default cartSlice.reducer;
