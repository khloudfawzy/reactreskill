import "./App.css";
import { useState } from "react";
import Header from "./UI/header/Header";
import BookShelf from "./Book-shelf/BookShelf/BookShelf";
import Search from "./search/Search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const onClickSearch = () => {
    setShowSearchpage(!showSearchPage);
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <Header />
          <BookShelf />
          <Search onClick = {onClickSearch}/>          
        </div>
      )}
    </div>
  );
}

export default App;
