import classes from '../BookShelf.module.css';
import Book from '../Book/Book';

const FilteredBooks = (props: any) => {
    return (
        <div>
        {
          props.books.length === 0 && <div className = {classes['not-available']}>
              <p>No books avaiable</p>
            </div>
        }
        {props.books && 
        <div>
          <div className = {classes.bookshelf}>
            <div className = {classes.displayFlex}>
              {props.books.map((book: any) => (
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

export default FilteredBooks;