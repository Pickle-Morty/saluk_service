import React, {useEffect, useState} from 'react';
import styles from "./HomePage.module.scss"

import Hero from './components/Hero';


import NewsCardBig from './components/NewsCardBig';
import NewsCardSmall from './components/NewsCardSmall';


import newsImage1 from "../../img/content/homePage/news1.jpg"
import newsImage2 from "../../img/content/homePage/news2.jpg"
import newsImage3 from "../../img/content/homePage/news3.jpg"
import newsImage4 from "../../img/content/homePage/news4.jpg"
import newsImage5 from "../../img/content/homePage/news5.jpg"


import team1 from "../../img/content/homePage/team.jpg"

import Partners from './components/Partners';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Footer from '../../Global/Footer/Footer';

const HomePage = () => {


    const bigNews = {
        img: newsImage1, title: 'Создано госучреждение «Салык Сервис» для помощи налогоплательщикам',
        date: '19/04/2022',
        text: 'Отмечается, что «Салык Сервис» образован с целью содействия участникам налоговых правоотношений в создании благоприятных условий для исполнения налоговых обязательств и эффективного администрирования.'
    }

    const newsArray = [
        {img: newsImage2, date: '14/05/2022', title: 'С 15 мая субъекты, занимающиеся оборотом маркированной продукции, нефти и нефтепродуктов, обязаны применять ЭТТН'},
        {img: newsImage3, date: '13/05/2022', title: 'ГНС в Ошской области изъяла более 3 тысяч бутылок алкоголя с поддельными акцизными марками'},
        {img: newsImage4, date: '13/05/2022', title: 'Утверждены сроки обязательного применения электронной товаротранспортной накладной'},
        {img: newsImage5, date: '19/04/2022', title: 'ГНС за 4 месяца собрала 48 млрд сомов налогов'},
    ]

    return (
        <>
            <Hero />
            <main className={styles.container}>
                <Partners />

                <section className={styles.news}>
                    <h2 className={styles.news__title}>Новости</h2>
                    <div className={styles.news__box}>
                        <div className={styles.news__col_g}>
                            <NewsCardBig
                                title={bigNews.title}
                                text={bigNews.text}
                                date={bigNews.date}
                                image={bigNews.img}
                            />
                        </div>
                        <div className={styles.news__col}>
                            {newsArray.map((item, id) => <NewsCardSmall
                                key = {id}
                                title={item.title}
                                date={item.date}
                                image={item.img} />)}
                        </div>
                    </div>
                </section>
                <Team />
                <Portfolio />

            </main>
            <Footer />
        </>
    )
}

export default HomePage