import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import addicon from '../Assets/add.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" width={50} />
                <p>Herbal Garden</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("home")}>
                    <Link style={{textDecoration:'none'}} to='/'>Home</Link>
                    {menu === "home" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("digestivehealth")}>
                    <Link style={{textDecoration:'none'}} to='/digestivehealth'>Digestive Health</Link>
                    {menu === "digestivehealth" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("immunity")}>
                    <Link style={{textDecoration:'none'}} to='/immunity'>Immunity</Link>
                    {menu === "immunity" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("skincare")}>
                    <Link style={{textDecoration:'none'}} to='/skincare'>Skin Care</Link>
                    {menu === "skincare" ? <hr /> : null}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/add'>
                    <img src={addicon} alt="" width={45} />
                </Link>
                <div className='nav-add-count'>0</div>
            </div>
        </div>
    );
}

export default Navbar;
