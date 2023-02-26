import classes from './Search.module.css';
import { useState } from "react";

const Search = (props) => {
    return(
        <div className = {classes['open-search']}>
            <a onClick={props.onClick}>Add a book</a>
        </div>
    )
};


export default Search;