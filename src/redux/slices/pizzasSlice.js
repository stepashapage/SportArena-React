import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    "pizza/fetchPizzasStatus",
    async (params) => {
        const { sortType, pageCount, category } = params;
        const { data } = await axios.get(
            `https://65e1b95ca8583365b3171da6.mockapi.io/items?page=${pageCount}&limit=8&${category}&sortBy=${sortType}&order=desc`
        );
        return data;
    }
);

const initialState = {
    items: [],
    status: "loading",
};

const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = "loading";
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "success";
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = "error";
                state.items = [];
            });
    },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
