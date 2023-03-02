import Book from '../Book/Book';
import classes from './BookShelf.module.css';

const BookShelf = (props: any) => {
  const currentlyReadingBooks = props.books.filter( (book: any) => book.shelf === 'currentlyReading');
  const wantToReadBooks = props.books.filter( (book: any) => book.shelf === 'wantToRead');;
  const readBooks = props.books.filter( (book: any) => book.shelf === 'read');


    return(
      <div>
        {props.books.length === 0 && <p>No books avaiable</p>}
        {props.books.length > 0 && 
        <div>
          <div className = {classes.bookshelf}>
            <h2 className = {classes['bookshelf-title']}>Currently Reading</h2>
            <div className = {classes.displayFlex}>
              {currentlyReadingBooks.map((book: any) => (
                <Book key = {book.title} bookInfo = {
                  {
                    title: book.title,
                    authors: book.authors,
                    imgUrl: book.imageLinks.thumbnail,
                  }
                } />
              ))}
            </div>
          </div>
          <div className = {classes.bookshelf}>
            <h2 className = {classes['bookshelf-title']}>Want to Read</h2>
            <div className = {classes.displayFlex}>
            {wantToReadBooks.map((book: any) => (
                <Book key = {book.title} bookInfo = {
                  {
                    title: book.title,
                    authors: book.authors,
                    imgUrl: book.imageLinks.thumbnail,
                  }
                } />
              ))}
            </div>
          </div>

          <div className = {classes.bookshelf}>
            <h2 className = {classes['bookshelf-title']}>Read</h2>
            <div className = {classes.displayFlex}>
            {readBooks.map((book: any) => (
                <Book key = {book.title} bookInfo = {
                  {
                    title: book.title,
                    authors: book.authors,
                    imgUrl: book.imageLinks.thumbnail,
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