import React from "react";
import styles from "../Hero/Hero.module.scss"
import messageIcon from "../../../../img/icons/messageIcon__white.png"
import arrowLeft from "../../../../img/icons/arrowLeftYellow.png"

const Title = () => {

    return (
        <div>
            <div className={styles.about}>О нас</div>
            <div className={styles.title}>
                Мы помогаем <span className={styles.color_green} >государству</span> и  <span className={styles.color_yellow}>бизнесу</span> воплощать свои идеи в жизнь
            </div>
            <div className={styles.base}>
                Государственное учреждение “Салык Сервис”,
                основанное в 2022 году, которое создает продукт,
                ориентированный на пользователя,
                который помогает ее клиенту развиваться,
                наша основная идея - совершенство,
                наша цель - создавать полезные и простые в использовании продукты и помогать людям развивать свой бизнес.
            </div>
            <div className={styles.box}>
           <button className={styles.btn}>Давайте поговорим <img src={messageIcon} alt="" /></button>
           <a href="" className={styles.linkBtn_m}>Посмотреть портфолио<img src={arrowLeft} alt="" /></a>
        </div>
        </div>
    )
}


export default Title;