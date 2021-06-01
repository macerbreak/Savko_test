import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/default" activeClassName={s.activeLink}>Default</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/edit" activeClassName={s.activeLink}>Edit</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/about" activeClassName={s.activeLink}>About</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;