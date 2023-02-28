import classes from './SearchInput.module.css';


const SearchInput = (props: any) => {
    const onSearchForBook = () => {
        props.onClickSearch();
    };

    const onFilterBooks = (event: any) => {
        props.onFilter(event.target.value);
    };

    return(
        <div className = {classes['search-books']}>
            <div className = {classes['search-books-bar']}>
                <button
                    className = {classes['close-search']}
                    onClick= {onSearchForBook}
                >
                    Close
                </button>
                <div className = {classes['search-books-input-wrapper']}>
                    <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange = {onFilterBooks}
                    />
                </div>
            </div>
            <div className = {classes['search-books-results']}>
                <ol className = {classes['books-grid']}></ol>
            </div>
        </div>
    )
};

export default SearchInput;