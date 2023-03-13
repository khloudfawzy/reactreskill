import classes from './ChangerButton.module.css';
import { useDispatch } from 'react-redux';
import { updateBook } from '../../store/bookActions';
import { Dispatcher } from '../../store/bookStore';

const ChangerButton = (props: any) => {
    console.log('btn', props)
    const dispatch = useDispatch<Dispatcher>();

    const updateBookStatus = (event: any) => {
      const shelf = event.target.value
      const book = props.book;
      const bookList = props.bookList;
      dispatch(updateBook(book,shelf,bookList))
    }

    return(
        <div className = {classes['book-shelf-changer']}>
            <select onChange = {updateBookStatus}>
                <option value="none" disabled>
                Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
            </select>
        </div>
    )
}

export default ChangerButton;