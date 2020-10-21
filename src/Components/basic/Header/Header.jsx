import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

export default function Header() {

    return (
        <div title={'Home'} className={style.headerContainer}>
            <NavLink className={style.headerLink} to={'/'}>Home Page</NavLink>
        </div>
    );
}
