import { useEffect, useState } from 'react';
import FilteredBooks from '../../Book-shelf/filteredBooks/FilteredBooks';
import SearchInput from '../../UI/SearchInput/SearchInput';
import * as BookAPI from '../../BooksAPI';

const Search = () => {
    const [bookList, setBookList] = useState([]);
    const [filteredBookList, setfilteredBookList] = useState([]); 
    useEffect(()=>{
        BookAPI.getAll().then( (books) => {
          setBookList(books)
        })
    },[]);
    
    const filterBookListHandler = (value: string) => {
        const filtered: any = value.length > 0 ? bookList.filter((book: any) => book.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) : []
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