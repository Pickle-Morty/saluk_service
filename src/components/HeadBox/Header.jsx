import React, {useEffect, useState, } from 'react';
import "./Header.scss"
import logo from "../img/icons/logo.png"
import searcIcon from "../img/icons/searchIcon.png"
import menuIcon from "../img/icons/menuIcon.svg"
import {NavLink, useLocation, } from "react-router-dom"


const Header = () => {

    const [openNav, setOpenNav] = useState(false)
    const location = useLocation()

    const headerArray = [
        {title: 'Главная', link: '/'},
        {title: 'О нас', link: '/about'},
        {title: 'Новости', link: '/#'},
        {title: 'Карьера', link: '/#'},
        {title: 'Проекты', link: '/#'},
        {title: 'Контакты', link: '/#'},
    ]
    return (
        <header className="header container">
            <div className="header__logo">
                <img src={logo} alt="logo" />
                Салык <br /> Сервис
            </div>
            <nav className={openNav ? 'header__nav open' : 'header__nav'}>
                <ul>
                    {headerArray.map((item, id) =>
                        <li key={id} className={location.pathname === item.link ? 'header__li active' : 'header__li'}>
                            <NavLink to={item.link}>{item.title}</NavLink>
                        </li>)}
                </ul>
            </nav>
            <div className="header__box">
                <div className="header__item">Eng</div>
                <span className="header__line"></span>
                <img src={searcIcon} alt="" />
            </div>
            <img src={menuIcon} onClick={() => setOpenNav(prev => !prev)} alt="" className="header__menu" />

        </header>
    )
}

export default Header

