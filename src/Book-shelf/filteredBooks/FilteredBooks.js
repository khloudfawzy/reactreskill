import classes from './FilteredBooks.module.css';
import Book from '../Book/Book';
import { useEffect, useState } from 'react';


const FilteredBooks = (props) => {

    return (
        <div>
        {!props.books && <p>No books avaiable</p>}
        {props.books && 
        <div>
          <div className = {classes.bookshelf}>
            <div className = {classes.displayFlex}>
              {props.books.map((book) => (
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