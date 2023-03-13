import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./bookStore";

const bookSlice = createSlice({
    name: 'bookSlice',
    initialState: {
        books:[],
        book:{},
        searchResultBooks:[], 
    },
    reducers: {
        updateBook(state, action) {
            state.books = action.payload;

        },
    }
})
export default bookSlice.reducer;

export const bookAction = bookSlice.actions;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;