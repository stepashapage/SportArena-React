import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum SortPropertyEnum {
    RATING = "rating",
    TITLE = "title",
    PRICE = "price",
}

export type sortType = {
    name: string;
    sortProperty: SortPropertyEnum;
};

export interface FilterInitialType {
    SearchValue: string;
    categoryId: number;
    pageCount: number;
    sort: sortType;
}

const initialState: FilterInitialType = {
    SearchValue: "",
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: "популярности",
        sortProperty: SortPropertyEnum.RATING,
    },
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.SearchValue = action.payload;
        },
        setSortId(state, action: PayloadAction<sortType>) {
            state.sort = action.payload;
        },
        setPageCount(state, action: PayloadAction<number>) {
            state.pageCount = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterInitialType>) {
            state.categoryId = Number(action.payload.categoryId);
            state.pageCount = Number(action.payload.pageCount);
            state.sort = action.payload.sort;
        },
    },
});

export const {
    setCategoryId,
    setSortId,
    setPageCount,
    setFilters,
    setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
