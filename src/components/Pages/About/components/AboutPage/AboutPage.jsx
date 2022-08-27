import React from "react";
import Footer from "../../../../Global/Footer/Footer";
import Hero from '../Hero/Hero';
import styles from '../AboutPage/AboutPage.module.scss'
import Reviews from "../Reviews/Reviews";
import Team from "../Team/Team";



const AboutPage = () => {

    return (
        <div>
            <div className={styles.container}>
                <Hero />
                <Team />
            </div>
            <Reviews />
            <Footer />
        </div>
    )
}
export default AboutPage;