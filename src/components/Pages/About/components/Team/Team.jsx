import React from "react";
import styles from "../Team/Team.module.scss";
import ava from '../../../../img/content/AboutPage/Rectangle26.png';
import Slider from "react-slick";

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

const Team = () => {

    const settings = {
        className: styles.team__slider,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: true,
        arrow: true,

        responsive: [
            {
                breakpoint: 980,
                settings: {
                    arrow: true,
                    variableWidth: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    arrow: true,
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrow: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />

                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrow: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />

                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrow: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />

                }
            },
            {
                breakpoint: 350,
                settings: {
                    arrow: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />

                }
            }
        ],


    };



    const teamData = [
        {
            name: 'Салиева Нургул', position: 'Директор',
            img: ava
        },
        {
            name: 'Качкынбай уулу  Шамшыбек', position: 'Заместитель  директора',
            img: ava
        },
        {
            name: 'Мукашев Тимур', position: 'Начальник',
            img: ava
        },
        {
            name: 'Антон Кан', position: 'Начальник',
            img: ava
        },
        {
            name: 'Антон Кан', position: 'Начальник',
            img: ava
        },
        {
            name: 'Антон Кан', position: 'Начальник',
            img: ava
        },
        {
            name: 'Антон Кан', position: 'Начальник',
            img: ava
        },
        {
            name: 'Антон Кан', position: 'Начальник',
            img: ava
        },
    ]



    return (


        <section className={styles.team}>
            <div className={styles.team__title}>Команда </div>
            <div className={styles.team__container}>
                {/* <div className={styles.team__body}>
                            <div className={styles.team__descr}>Познакомьтесь с удивительными и творческими членами нашей команды</div>
                            <Slider {...settings}>{teamData.map((person, id) =>
                                <div key={id} className={styles.team__blocks}>
                                    <div className={styles.personal__block}>
                                        <img src={ava} alt="" />
                                        <div className={styles.personal__block_title}>{person.name}</div>
                                        <div className={styles.personal__block_descr}>{person.position}</div>
                                    </div>
                                </div>)}
                            </Slider>

                        </div> */}
                <div className={styles.teamG__content}>
                    <div className={styles.teamG__title}>
                        Познакомьтесь с удивительными и творческими членами нашей команды
                            </div>
                    <div className={styles.teamG__slider}>
                        <Slider {...settings}>{ }
                            {teamData.map((item, id) =>
                                <div key={id} className={styles.slide}>
                                    <div className={styles.slide__wrapper_flex}>
                                        <div className={styles.slide__wrapper_contant}>
                                            <img src={item.img} alt="" className={styles.slide__img} />
                                            <div className={styles.slide__title}>{item.name}</div>
                                            <div className={styles.slide__pos}>{item.position}</div>
                                        </div>
                                    </div>
                                </div>)}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Team;