import { useEffect, useState } from 'react';
import * as BookAPI from '../../BooksAPI';
import Header from '../../UI/header/Header';
import BookShelf from '../../Book-shelf/BookShelf/BookShelf';
import SearchButton from '../../UI/searchButton/SearchButton';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

const Home = () => {
    const [isLoading, toggleIsLoadding] = useState(false);
    const [bookList, setBookList] = useState([]);
    useEffect(()=>{
        toggleIsLoadding(true);
        BookAPI.getAll().then( (books) => {
          setBookList(books)
          toggleIsLoadding(false);
        })
    },[]);

    return(
        <div className='app'>
            {isLoading && <div>
                <Header />
                <LoadingSpinner />
              </div> }
              {!isLoading && <div>
                <Header />
                <BookShelf books = {bookList}/>
                <SearchButton />
            </div>
            }
        </div>
    )
};

export default Home;