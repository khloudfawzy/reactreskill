import "./App.css";
import { useState } from "react";
import Header from "./UI/header/Header";
import BookShelf from "./Book-shelf/BookShelf/BookShelf";
import SearchButton from "./UI/searchButton/SearchButton";
import SearchInput from "./UI/SearchInput/SearchInput";
import FilteredBooks from "./Book-shelf/filteredBooks/FilteredBooks";

function App() {
  const bookList = {
    currentlyReading: [{
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      imgUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
    },
    {
      title: 'Ender\'s Game',
      author: 'Orson Scott Card',
      imgUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
    },
    {
      title: 'The Stranger',
      author: 'Alber Camu',
      imgUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
    }
    ],
    wantToRead: [{
      title: '1776',
      author: 'David McCullough',
      imgUrl: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
    },
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      imgUrl: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api',
    }
    ],
    read: [{
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      imgUrl: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
    },
    {
      title: 'Oh, the Places You\'ll Go!',
      author: 'Seuss',
      imgUrl: 'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
    },
    {
      title: 'The Adventures of Tom Sawyer',
      author: 'Mark Twain',
      imgUrl: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api',
    }
  ]
  };
  const [filteredBookList, setfilteredBookList] = useState([]); 
  const [showSearchPage, setShowSearchpage] = useState(false);
  const onshowSearchPageHandler = () => {
    setShowSearchpage(!showSearchPage);
    setfilteredBookList([])
  };
  const filterBookListHandler = (value) => {
    const books =  [...bookList.currentlyReading, ...bookList.wantToRead, ...bookList.read];
    const filtered = value.length > 0 ? books.filter(book => book.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) : []
    setfilteredBookList(filtered);
  }
  
  return (
    <div className="app">
        <div className="list-books">
          {showSearchPage ? (
                <div className="list-books">
                  <SearchInput onClickSearch = {onshowSearchPageHandler} onFilter = {filterBookListHandler}/>
                  <FilteredBooks books = {filteredBookList} />
                </div>
              ) : <div className="list-books">
                  <Header />
                  <BookShelf books = {bookList}/>
                  <SearchButton onClickSearch = {onshowSearchPageHandler}/>
              </div>
        }          
        </div>
    </div>
  );
}

export default App;
