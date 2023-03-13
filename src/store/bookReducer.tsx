import { createSlice } from '@reduxjs/toolkit';
export const BookSlice = createSlice({
name: 'bookRed',
initialState: [],
reducers: {
  updateBook: (state: any, book: any) => {
    // const updatedBook: any = state.Books.find((book:any) => book.id === id);
    state.shelf= book.payload.shelf;
    console.log(state.self);
    console.log(book);
    // state.Books = [...state.Books]
  },
  },

});

// this is for dispatch
export const { updateBook } = BookSlice.actions;
export const selectBooks = (state:any) => state

// this is for configureStore
export default BookSlice.reducer;