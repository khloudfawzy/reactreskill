import { useEffect, useState } from 'react';
import FilteredBooks from '../../Book-shelf/filteredBooks/FilteredBooks';
import SearchInput from '../../UI/SearchInput/SearchInput';
import { useAppSelector } from '../../store/bookSlice';
import { useDispatch } from 'react-redux';
import { Dispatcher } from '../../store/bookStore';
import { getAllBooksApi } from '../../store/bookActions';

const Search = () => {
    const [filteredBookList, setfilteredBookList] = useState([]); 
    const allBooks: any = useAppSelector<any>((state) => state?.books?.books);
    const dispatch = useDispatch<Dispatcher>();
    useEffect(()=>{
        dispatch(getAllBooksApi())
    },[dispatch]);
    
    const filterBookListHandler = (value: string) => {
        const filtered: any = value.length > 0 ? allBooks.filter((book: any) => book.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) : []
        setfilteredBookList(filtered)
      }   

    return(
        <div className = "app">
            { (
                <div>
                  <SearchInput onFilter = {filterBookListHandler}/>
                  <FilteredBooks books = {filteredBookList} />
                </div>
              )
            }
        </div>
    )
};

export default Search;