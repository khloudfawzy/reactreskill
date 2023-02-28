import classes from './FilteredBooks.module.css';
import Book from '../Book/Book';
import { BookModel } from '../../models/Book.model';

const FilteredBooks = (props: any) => {

    return (
        <div>
        {props.books.length === 0 && <p>No books avaiable</p>}
        {props.books && 
        <div>
          <div className = {classes.bookshelf}>
            <div className = {classes.displayFlex}>
              {props.books.map((book: BookModel) => (
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

export default FilteredBooks;