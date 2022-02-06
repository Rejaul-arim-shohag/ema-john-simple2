import React from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useFirebase();
    // const {user} = useAuth();
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                {/* <Link to="/shop">SHOP</Link>
                <Link to="/review">ORDER REVIEW</Link>
                <Link to="/inventory">MANAGE INVENTORY</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/register">Register</Link> */}

                 <a href="/shop">SHOP</a>
                 <a href="/review">ORDER REVIEW</a>
                 <a href="/inventory">MANAGE INVENTORY</a>
                 <span style={{color:"#fff"}}>{user.displayName}</span>
                 {
                     user.email ? <a href="/login" onClick={logOut}>LOGOUT</a>:<a href="/login">LOGIN</a>
                 }
                 <a href="/register">REGISTER</a>
            </nav>
        </div>
    );
};

export default Header;