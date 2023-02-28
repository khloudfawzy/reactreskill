import { BookModel } from '../../models/Book.model';
import Book from '../Book/Book';
import classes from './BookShelf.module.css';

const BookShelf = (props: any) => {  
  const bookList = [...props.books.currentlyReading, ...props.books.wantToRead, ...props.books.read];
    return(
      <div>
        {bookList.length === 0 && <p>No books avaiable</p>}
        {props.books && 
        <div>
          <div className = {classes.bookshelf}>
            <h2 className = {classes['bookshelf-title']}>Currently Reading</h2>
            <div className = {classes.displayFlex}>
              {props.books.currentlyReading.map((book: BookModel) => (
                <Book key = {book.title} bookInfo = {
                  {
                    title: book.title,
                    author: book.author,
                    imgUrl: book.imgUrl,
                  }
                } />
              ))}
            </div>
          </div>
          <div className = {classes.bookshelf}>
            <h2 className = {classes['bookshelf-title']}>Want to Read</h2>
            <div className = {classes.displayFlex}>
            {props.books.wantToRead.map((book: BookModel) => (
                <Book key = {book.title} bookInfo = {
                  {
                    title: book.title,
                    author: book.author,
                    imgUrl: book.imgUrl,
                  }
                } />
              ))}
            </div>
          </div>

          <div className = {classes.bookshelf}>
            <h2 className = {classes['bookshelf-title']}>Read</h2>
            <div className = {classes.displayFlex}>
            {props.books.read.map((book: BookModel) => (
                <Book key = {book.title} bookInfo = {
                  {
                    title: book.title,
                    author: book.author,
                    imgUrl: book.imgUrl,
                  }
                } />
              ))}
            </div>
          </div>
        </div>
        }

      </div>
    )
};

export default BookShelf;