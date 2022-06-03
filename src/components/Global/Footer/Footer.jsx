import React from 'react';
import logo from "../../img/icons/logo.png"
import "./Footer.scss"
import {Faisboock, In, Instagram, Telegram, Tweeter, Message} from "../../img/icons/svgFiles";
import messageIconGreen from "../../img/icons/messageIconGreen.svg"


const Footer = () => {
    const footerArray = [
        {text: 'О нас'},
        {text: 'Новости'},
        {text: 'Карьера'},
        {text: 'Проекты'},
        {text: 'Контакты'},
    ]
    const socialArray = [
        {text: 'linkedin.com', icon: <In />},
        {text: 'fb.com', icon: <Faisboock />},
        {text: 'twitter.com', icon: <Tweeter />},
        {text: 'instagram.com', icon: <Instagram />},
        {text: 't.me', icon: <Telegram />},
    ]
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__col">
                    <div className="footer__logo">
                        <img src={logo} alt="logo" />
                        <div className="">Салык <br /> Сервис</div>
                    </div>
                    <div className="footer__discription">Государственное учреждение “Салык Сервис” при ГНС МФ КР</div>
                </div>
                <div className="footer__col footer__about">
                    <div className="footer__subtitle"></div>
                    <ul className="footer__list_p">
                        {footerArray.map((item, id) => <li key={id} className="footer__item">{item.text}</li>)}
                    </ul>
                </div>
                <div className="footer__col">
                    <div className="footer__subtitle">Подписывайтесь на нас</div>
                    <ul className="footer__list">
                        {socialArray.map((item, id) => <li key={id} className="footer__item">
                            <div className="footer__icon">{item.icon}</div> <div className="footer__social">{item.text}</div>
                        </li>)}
                    </ul>
                </div>
                <div className="footer__col">
                    <div className="footer__subtitle">Свяжись с нами </div>
                    <div className="footer__text">Нужны ответы? Нужна помощь ? Просто напишите нам</div>
                    <div className="footer__form">
                        <input type="text" placeholder = "Введите почту" className="footer__input" />
                        <button className="footer__btn"> <img src={messageIconGreen} alt="" className=""/></button></div>
                </div>

            </div>
            <div className="footer__col_md">
                2022 ГУ “Салык Сервис”
            </div>
        </footer>
    )

}

export default Footer