import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import {FaShoePrints} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
// import logo from '../../Assets/logo.png';

const index = () => {
    return (
        <nav>
            <div className={classes.nav_div}>
                <FaShoePrints className={classes.navicon} />
                {/* <img src={logo} className={classes.logo} alt='logo image'/> */}
                <NavLink className={classes.navlink} activeClassName={classes.active} to='/'>shoe-side</NavLink>
            </div>
            <NavLink to='/' className={classes.navhamburger}><GiHamburgerMenu /></NavLink>

        </nav>
    ) 
}

export default index
