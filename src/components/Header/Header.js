import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt=''></img>
                <div className='link'>
                    <a href='/shop'>Shop</a>
                    <a href='/orders'>Orders</a>
                    <a href='/inventory'>Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;