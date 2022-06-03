import React from 'react';
import styles from "./Portfolio.module.scss"
import img1 from "../../../img/content/homePage/Portfolio1.png"
import img2 from "../../../img/content/homePage/Portfolio2.png"
import img3 from "../../../img/content/homePage/Portfolio3.png"
import img4 from "../../../img/content/homePage/Portfolio4.png"
import img5 from "../../../img/content/homePage/Portfolio5.png"
import arrowNext from "../../../img/icons/arrowNextMin.svg"


const Portfolio = () => {
    const porfolioData = [
        {
            title: 'UI/UX дизайн | Разработка веб-сайта',
            subtitle: 'НДС-ОФИС ИНТЕРНЕТ-КОМПАНИИ',
            img: img2,
            background: 'rgba(61, 167, 180, 1)',
            paddingTop: '26px',
            paddingBottom: '15px'
        },
        {
            title: 'UI/UX дизайн | Разработка веб-приложения',
            subtitle: 'Кабинет налогоплательщика',
            img: img3,
        },
        {
            title: 'UI/UX дизайн | Разработка веб-сайта ',
            subtitle: 'НДС-ОФИС ИНТЕРНЕТ-КОМПАНИИ',
            img: img2,
        },
        {
            title: 'UI/UX дизайн | Разработка веб-сайта ',
            subtitle: 'Новый сайт ГНС при МФ КР',
            img: img4,
        },
    ]

    
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Наши проекты</h2>
            <div className={styles.box}>
                <div className={styles.col_2}>
                    {porfolioData.map((item, id) =>
                        <div key={id}
                            className={styles.cardSmall}>
                            <img src={item.img} alt="" className={styles.cardSmall__img} />
                            <div className={styles.cardSmall__title}>{item.title}</div>
                            <div className={styles.cardSmall_subtitle}>{item.subtitle}</div>
                        </div>)}
                </div>
                <div className={styles.col}>
                    <div className={styles.cardBig}>
                        <img src={img5} alt="" className={styles.cardBig__img} />
                        <div className={styles.cardBig__title}>UI/UX дизайн | Разработка приложений</div>
                        <div className={styles.cardBig_subtitle}>Мобильное приложение “Салык чек”</div>
                    </div>
                </div>
            </div>
            <button className={styles.btn}>Показать все <img src={arrowNext} alt=""/></button>
        </div>
    )
}

export default Portfolio

