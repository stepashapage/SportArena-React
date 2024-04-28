import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sortType } from "./filterslice";

export type FetchPizzasArgs = {
    sortType: string;
    pageCount: number;
    category: string;
};

enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

type InitialStateType = {
    id: string;
    count: number;
    type: string;
    title: string;
    price: number;
    imageUrl: string;
    size: number;
};

type PizzaSliceState = {
    items: InitialStateType[];
    status: Status;
};

export const fetchPizzas = createAsyncThunk(
    "pizza/fetchPizzasStatus",
    async (params: FetchPizzasArgs) => {
        const { sortType, pageCount, category } = params;
        const { data } = await axios.get<InitialStateType[]>(
            `https://65e1b95ca8583365b3171da6.mockapi.io/items?page=${pageCount}&limit=8&${category}&sortBy=${sortType}&order=desc`
        );
        return data as InitialStateType[];
    }
);

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
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
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = Status.ERROR;
                state.items = [];
            });
    },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
