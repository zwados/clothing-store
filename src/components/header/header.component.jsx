import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
    return ( 
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>
            {
                currentUser ? (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>) 
                :
                (<Link className="signin" to="/signin">
                Sign In
                </Link>)
            }
            <CartIcon/>
        </div>
        {
        !hidden ?
        <CartDropdown/>
        : null
        }
    </div> );
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
   currentUser,
   hidden
})
 
export default connect(mapStateToProps)(Header);