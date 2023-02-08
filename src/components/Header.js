import React from 'react';
import logo from './logo.jpeg';

const Header=()=>{
    return (
        <header className='nav'>
            <img src={logo}alt="Logo" className='nav-logo'/>
            <ul className='nav-items'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </header>
    )
}

export default Header

