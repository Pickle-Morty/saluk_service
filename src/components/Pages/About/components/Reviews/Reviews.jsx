import React from "react";
import Slider from "react-slick";
import styles from "../Reviews/Reviews.module.scss"
import ava from "../../../../img/content/AboutPage/Ellipse.png";
import secondAva from "../../../../img/content/AboutPage/EllipseTwo.png";


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={styles.nextArrow}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={styles.prevArrow}
            onClick={onClick}
        />
    );
}

const Reviews = () => {

    const settings = {
        className: styles.team__slider,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ],

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };



    const teamData = [
        {
            name: 'Адилет Дубанаев', position: 'Заместитель председателя Налоговой службы',
            img: ava,
            text: 'Наша команда создателей цифровых продуктов и Tch Bring Skilled поднимет вашу идею на новый уровень и поможет вам с вашим продуктом.',
            value: 12
        },
        {
            name: 'Илон Маск', position: 'Американский предприниматель, инженер и миллиардер',
            img: secondAva,
            text: 'Благодаря команде ГУ “Салык Сервис” мы запустили Starlink на весь мир и к 2028 году полетим на Марс.',
            value: 3
        },
        {
            name: 'Адилет Дубанаев', position: 'Заместитель председателя Налоговой службы',
            img: ava,
            value: 5,
            text: 'Наша команда создателей цифровых продуктов и Tch Bring Skilled поднимет вашу идею на новый уровень и поможет вам с вашим продуктом.',
        },
        {
            name: 'Илон Маск', position: 'Американский предприниматель, инженер и миллиардер',
            img: secondAva,
            value: 8,
            text: 'Благодаря команде ГУ “Салык Сервис” мы запустили Starlink на весь мир и к 2028 году полетим на Марс.',
        },
    ]

    const otherArray = teamData.map(item => item.name)

    let counter = 0

    teamData.forEach(item => {
        counter = counter + item.value
    })






    return (
        <section className={`${styles.reviews} className='container'`}>
            <div className={styles.container}>
                <h4 className={styles.reviews__title}>Отзывы</h4>
                <h4 className={styles.reviews__descr}>Вы все еще сомневаетесь в сотрудничестве с нами? Проверьте, что они говорят о нас</h4>
                {/* <Slider {...settings}>
                    {console.log(counter)}
                    {teamData.map((person, id) =>
                        <div key={id} className={styles.slide}>
                            <div className={styles.person}>
                                <div className={styles.person__title}>{person.text}</div>
                                <div className={styles.person__info}>
                                    <div className={styles.person__ava} >
                                        <img src={person.img} alt='' className={styles.person_img} />
                                    </div>
                                    <div className={styles.person__text}>
                                        <div className={styles.person__name}>{person.name}</div>
                                        <div className={styles.person__position}>{person.position}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Slider> */}
                <Slider {...settings}>

                    {teamData.map((person, id) => <div key = {id} className={styles.slide}>
                        <div className={styles.slide__wrapper_flex}>
                            <div className={styles.slide__wrapper_contant}>
                                <div className={styles.slide__text}>{person.text}</div>
                                <div className={styles.slide__box}>
                                    <img src={person.img} alt="" className={styles.slide__img} />
                                    <div className={styles.slide__col}>
                                        <div className={styles.slide__name}>{person.name}</div>
                                        <div className={styles.slide__subtitle}>{person.position}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    )}
                </Slider>

            </div>
        </section>
    )
}
export default Reviews;