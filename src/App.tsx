import "./App.css";
import { useEffect, useState } from "react";
import Header from "./UI/header/Header";
import BookShelf from "./Book-shelf/BookShelf/BookShelf";
import SearchButton from "./UI/searchButton/SearchButton";
import SearchInput from "./UI/SearchInput/SearchInput";
import FilteredBooks from "./Book-shelf/filteredBooks/FilteredBooks";
import * as BookAPI from './BooksAPI';
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";

function App() {
  const [bookList, setBookList] = useState([]);
  const [filteredBookList, setfilteredBookList] = useState([]); 
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [isLoading, toggleIsLoadding] = useState(false);
  useEffect(()=>{
      toggleIsLoadding(true);
      BookAPI.getAll().then( (books) => {
        setBookList(books)
        toggleIsLoadding(false);
      })
  },[]);
  const onshowSearchPageHandler = () => {
    setShowSearchpage(!showSearchPage);
    setfilteredBookList([])
  };
  const filterBookListHandler = (value: string) => {
    const filtered: any = value.length > 0 ? bookList.filter((book: any) => book.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) : []
    setfilteredBookList(filtered);
  }
  
  return (
    <div className="app">
          {showSearchPage && (
                <div className="list-books">
                  <SearchInput onClickSearch = {onshowSearchPageHandler} onFilter = {filterBookListHandler}/>
                  <FilteredBooks books = {filteredBookList} />
                </div>
              )
          }
          {!showSearchPage && isLoading && <div>
            <Header />
            <LoadingSpinner />
          </div> }
          {!showSearchPage && !isLoading && <div className="list-books">
            <Header />
            <BookShelf books = {bookList}/>
            <SearchButton onClickSearch = {onshowSearchPageHandler}/>
        </div>
          }        
    </div>
  );
}

export default App;
