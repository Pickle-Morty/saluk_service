import React from "react";
import Slider from "react-slick";
import styles from "../Reviews/Reviews.module.scss"
import ava from "../../../../img/content/AboutPage/Ellipse.png";
import secondAva from "../../../../img/content/AboutPage/EllipseTwo.png";

const Reviews = () => {





    var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        variableWidth: true,
        swipe: false,

        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1200,
        cssEase: "ease-in-out",

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    className: "slider",
                    variableWidth: false,
                    slidesToShow: 2,


                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]

    };



    return (
        <section className={styles.slider}>
            <div className={styles.container_container}>
                <h4 className={styles.title__slide}>Отзывы</h4>
                <h4 className={styles.title__descr}>Вы все еще сомневаетесь в сотрудничестве с нами? Проверьте, что они говорят
                    о нас</h4>
                <div className={styles.slider__container}>
                    <div className={styles.slide}>
                        <div className={styles.slide__first_first}>
                            <div className={styles.slide__first_title}> Наша команда создателей цифровых продуктов и Tch Bring
                                Skilled поднимет вашу идею на новый уровень и поможет вам с вашим продуктом.</div>
                            <div className={styles.slide__first}>
                                <img src={ava} alt="" class={styles.first__img} />
                                <div className={styles.text}>
                                    <div className={styles.slide__first__title}>Адилет Дубанаев</div>
                                    <div className={styles.slide__first__descr}>Заместитель председателя
                                        Налоговой службы</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slide__second_second}>
                            <div className={styles.slide__second_title}> Благодаря команде ГУ “Салык Сервис” мы запустили
                                Starlink на весь мир и к 2028 году полетим на Марс.</div>
                            <div className={styles.slide__second}>
                                <img src={secondAva} alt="" class={styles.second__img} />
                                <div className={styles.second__text}>
                                    <div className={styles.slide__second__title}>Илон Маск</div>
                                    <div className={styles.slide__second__descr}>Американский предприниматель,
                                        инженер и миллиардер</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slide}>
                        </div>
                        {/* <div className={styles.slide}>
                            <h1>3</h1>
                        </div>
                        <div class={styles.slide}>
                            <h1>4</h1>
                        </div> */}
                    </div>
                    <div className={styles.btn__container}>
                        <button type="button" className={styles.prev__btn}>
                            prev
                        </button>
                        <button type="button" className={styles.next__btn}>
                            next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Reviews;