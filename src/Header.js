import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [ { basket, user } ] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            {/* Logo on the left */}
            <Link to="/">
                <img 
                    className='header__logo' 
                    src='https://image.shutterstock.com/image-photo/kiev-ukraine-may-07-2015-260nw-276929006.jpg'
                    alt=""
                />
            </Link>

            {/* Search Box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            {/* 3 links of the right */}
            <div className="header__nav">
                {/* Ist Link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out': "Sign In"}</span>
                    </div>

                </Link>

                {/* 2nd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>

                </Link>

                {/* 3rd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>

                </Link>

                {/* 4th Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* SHopping Basket Icon */}
                        <ShoppingBasketIcon/>

                        {/* Numbers of Itmes in the basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>

            {/* BAsket Icon with number */}
            
        </nav>
    )
}

export default Header
