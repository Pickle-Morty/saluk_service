import React from "react";
import Slider from "react-slick";
import styles from "./Partners.module.scss"

import partner1 from "../../../img/content/homePage/partner1.svg"
import partner2 from "../../../img/content/homePage/partner2.svg"
import partner3 from "../../../img/content/homePage/partner3.svg"
import partner4 from "../../../img/content/homePage/partner4.svg"

const Partners = () => {

    const partners = [
        {img: partner1, text: ''},
        {img: partner2, text: ''},
        {img: partner3, text: ''},
        {img: partner4, text: ''},
    ]

    var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        variableWidth: true,
        swipe: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    className: "slider",
                    variableWidth: false,

                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",

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

        <section className={styles.partners}>
            <h2 className={styles.partners__title}>Наши партнеры</h2>
            <div className={styles.partners__wrapper}>
                <Slider {...settings}>
                    {partners.map((partner, id) =>
                        <div key={id} className={styles.partners__item}>
                            <div className={styles.partners__wrapper_item}>
                                <img src={partner.img} alt="parnerIcon" />
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
        </section>

    );

}

export default Partners