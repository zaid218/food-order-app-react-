import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
//import styles from 'Header.module.css'

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles['header']}>
                <h1>FoodEase</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Delicious Food!" />
            </div>
        </React.Fragment>

    );
}
export default Header;