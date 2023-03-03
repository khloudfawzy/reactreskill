import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {

    return (
        <div className = {classes['spinner-wrapper']}>
            <div className = {classes['lds-grid']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default LoadingSpinner;