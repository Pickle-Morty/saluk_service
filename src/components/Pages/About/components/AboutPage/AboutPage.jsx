import React from "react";
import Footer from "../../../../Global/Footer/Footer";
import styles from '../AboutPage/AboutPage.module.scss'
import Base from "../Base/Base";
import Conversation from "../Conversation/Conversation";
import Reviews from "../Reviews/Reviews";
import Team from "../Team/Team";
import Title from "../Title/Title";


const AboutPage = () => {

    return(
        <div>
            <div className={styles.container}>
            <div>
                <Title/>
            </div>
            <div>
                <Base/>
            </div>
            <div>
                <Conversation/>
            </div>
            <div>
                <Team />
            </div>
            <div>
                <Reviews/>
            </div>
            
        </div>
        <Footer/>
        </div>
    )
}
export default AboutPage;