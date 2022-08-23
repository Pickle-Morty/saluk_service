import React, {useEffect, useState} from 'react';
import "./Header.scss"
import logo from "../img/icons/logo.png"
import searcIcon from "../img/icons/searchIcon.png"
import menuIcon from "../img/icons/menuIcon.svg"
import {NavLink} from "react-router-dom"


const Header = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <header className="header container">
            <div className="header__logo">
                <img src={logo} alt="logo" />
                Салык <br/> Сервис
            </div>
            <nav className={openNav ? 'header__nav open': 'header__nav'}>
                
                
                <ul>
                    <li className="header__li active">
                        <NavLink to="/Home">Главная</NavLink>
                        </li>
                    <li className="header__li">
                        <NavLink to="/About">О нас</NavLink>
                        </li>
                    <li className="header__li">Новости</li>
                    <li className="header__li">Карьера</li>
                    <li className="header__li">Проекты</li>
                    <li className="header__li">Контакты</li>
                </ul>
            </nav>
            <div className="header__box">
                <div className="header__item">Eng</div>
                <span className="header__line"></span>
                <img src={searcIcon} alt=""/>
            </div>
            <img src={menuIcon} onClick = {() => setOpenNav(prev => !prev)} alt="" className="header__menu"/>

        </header>
    )
}

export default Header

