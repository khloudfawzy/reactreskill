import { useEffect, useState } from 'react';
import Header from '../../UI/header/Header';
import BookShelf from '../../Book-shelf/BookShelf/BookShelf';
import SearchButton from '../../UI/searchButton/SearchButton';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import { useAppSelector } from '../../store/bookSlice';
import { useDispatch } from 'react-redux';
import { Dispatcher } from '../../store/bookStore';
import { getAllBooksApi } from '../../store/bookActions';

const Home = () => {
    const [isLoading, toggleIsLoadding] = useState(false);
    const allBooks: any = useAppSelector<any>((state) => state?.books?.books);
    const dispatch = useDispatch<Dispatcher>();

    useEffect(()=>{
        toggleIsLoadding(true);
        dispatch(getAllBooksApi())
        toggleIsLoadding(false);
    },[dispatch]);

    return(
        <div className='app'>
            {isLoading && <div>
                <Header />
                <LoadingSpinner />
              </div> }
              {!isLoading && <div>
                <Header />
                <BookShelf books = {allBooks}/>
                <SearchButton />
            </div>
            }
        </div>
    )
};

export default Home;