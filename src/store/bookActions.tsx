import * as BookAPI from '../BooksAPI';
import { Dispatch } from "redux";
import { bookAction } from './bookSlice'

export const updateBook = (book : any , shelf : string, allBooks: any) => (dispatch : Dispatch ) => {
    BookAPI.update(book, shelf).then(() =>{
    let newBooks = [];
    newBooks = allBooks.map((item: any) => {
        if (item.id === book.id ) {
          return {...item, shelf: shelf as string};
        }
        return item;
      });
    dispatch(bookAction.updateBook(newBooks));
  }
  );
};