import React from "react";
import styles from "../Reviews/Reviews.module.scss"
import Slider from "react-slick";
import {SampleNextArrow, SamplePrevArrow} from "../../../../UI/Buttons"


const Reviews = () => {
    const settings = {
        className: styles.team__slider,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const teamData = [
        {
            name: 'Салиева Нургул', position: 'Директор',
            img: 'https://www.caproasia.com/wp-content/uploads/2015/08/Priority-Banker-Girl-Office-3.jpg',
            text: 'Наша команда создателей цифровых продуктов поднимет вашу идею на новый уровень и поможет вам с вашим продуктом.',
            title: 'Команда Салык Сервис',
            subtitle: 'Команда креативщиков Who Excited поможет вам с вашей идеей'
        },
        {
            name: 'Дастан Бообеков', position: 'Менеджер',
            img: 'https://previews.123rf.com/images/pressmaster/pressmaster1704/pressmaster170400062/75330432-banquero-elegante.jpg',
            text: 'Lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo',
            title: 'Команда Салык Сервис',
            subtitle: 'Команда маркетологов Who Excited поможет вам продать вашу идею'
        },
    ]

    

    return (
        <section className={`${styles.reviews}`}>
            <div className={`${styles.container_container} container`}>
                <h4 className={styles.title__slide}>Отзывы</h4>
                <h4 className={styles.title__descr}>Вы все еще сомневаетесь в сотрудничестве с нами? Проверьте, что они говорят
                    о нас</h4>
                <div className={styles.slider__container}>
                    {/* <div className={styles.slide}>
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
                        <div className={styles.slide}>
                            <h1>3</h1>
                        </div>
                        <div class={styles.slide}>
                            <h1>4</h1>
                        </div>
                    </div>
                    <div className={styles.btn__container}>
                        <button type="button" className={styles.prev__btn}>
                            prev
                        </button>
                        <button type="button" className={styles.next__btn}>
                            next
                        </button>
                    </div> */}

                    <Slider {...settings}>
                        {teamData.map((person, id) =>
                            <div key={id} className={styles.team__slider_wrapper}>
                                <div className={styles.team__wrapper}>
                                    <div className={styles.team__col}>
                                        <h2 className={styles.team__title}>{person.title}</h2>
                                        <div className={styles.team__subtitle}>{person.subtitle}</div>
                                        <div className={styles.team__discription}>{person.text}</div>
                                    </div>
                                    <div className={styles.team__col}>
                                        <div className={styles.teamCard}>
                                            <div className={styles.teamCard__wrapper_img}>
                                                <img src={person.img} alt="" className={styles.teamCard__img} />
                                            </div>
                                            <div className={styles.teamCard__title}>{person.name}</div>
                                            <div className={styles.teamCard__position}>{person.position}</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>)}
                        </Slider>
                </div>
            </div>
        </section>
    )
}
export default Reviews;