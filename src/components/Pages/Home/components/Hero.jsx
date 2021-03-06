import React, {useEffect, useState} from 'react';
import styles from "./Hero.module.scss"
import img1 from '../../../img/content/homePage/Ellipse 24.png'
import messageIcon from "../../../img/icons/messageIcon__white.png"
import arrowLeft from "../../../img/icons/arrowLeftYellow.png"
import vectorArc from "../../../img/content/homePage/vectorArc.png"
import backgroundHero from "../../../img/content/homePage/backgroundHero.png"
import backgroundHeroImg from "../../../img/content/homePage/backgroundHeroImg.svg"
import MyImgBox from './MyImgBox';


const Hero = () => {
    const heroArray = [
        img1, img1
    ]
    return (
        <div className={styles.wrapper}>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.hello}>Привет,</div>
                    <div className={styles.title}>
                        Мы помогаем <span className={styles.color_green} >государству</span> и <br className={styles.xl} /> <span className={styles.color_yellow}>бизнесу</span> воплощать свои идеи в жизнь
                        </div>
                    <div className={styles.discription}>
                        Талантливая команда, которая поможет вам в создании полезного и простого в использовании продукта
                        </div>
                    <div className={styles.box}>
                        <button className={styles.btn}>Давайте поговорим <img src={messageIcon} alt="" /></button>
                        <a href="" className={styles.linkBtn_xl}>Портфолио <img src={arrowLeft} alt="" /></a>
                        <a href="" className={styles.linkBtn_m}>Посмотреть портфолио<img src={arrowLeft} alt="" /></a>
                    </div>
                </div>
                <MyImgBox array={heroArray} />
                <img src={vectorArc} className={styles.vectorArc} alt="" />
            </div>
            <img src={backgroundHero} className={styles.background} alt="" />

        </div>
    )
}

export default Hero