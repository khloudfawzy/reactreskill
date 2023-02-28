import classes from './SearchButton.module.css';

const Search = (props: any) => {
    const onSearchForBook = () => {
        props.onClickSearch();
    }

    return(
        <div className = {classes['open-search']}>
            <button onClick={onSearchForBook}>Add a book</button>
        </div>
    )
};


export default Search;