import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

export type InitialStateType = {
    id: string;
    count: number;
    type: string;
    title: string;
    price: number;
    imageUrl: string;
    size: number;
};

interface CartSliceState {
    TotalPrice: number;
    items: InitialStateType[];
}

const { items, TotalPrice } = getCartFromLS();

const initialState: CartSliceState = {
    TotalPrice: TotalPrice,
    items: items,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action: PayloadAction<InitialStateType>) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
            state.TotalPrice = calcTotalPrice(state.items);
        },
        removeItems(state, action: PayloadAction<string>) {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload
            );
        },
        clearItems(state) {
            state.items = [];
            state.TotalPrice = 0;
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem: any = state.items.find(
                (obj) => obj.id === action.payload
            );
            if (findItem) {
                findItem.count--;
            }
        },
    },
});

export const selectCart = (state: RootState) => state.cart;

export const { addItems, removeItems, clearItems, minusItem } =
    cartSlice.actions;

export default cartSlice.reducer;
