import React from "react";
import Footer from "../../../../Global/Footer/Footer";
import styles from '../AboutPage/AboutPage.module.scss'
import Base from "../Base/Base";
import Conversation from "../Conversation/Conversation";
import Reviews from "../Reviews/Reviews";
import Team from "../Team/Team";
import Title from "../Title/Title";


const AboutPage = () => {

    return (
        <div>
            <div className='container'>

                <> {/* Объеденить в Компоненту Hero */}
                    <Title />
                    <Base />
                    {/* <Conversation /> */}
                </>

                <div>
                    <Team />
                </div>
            </div>

            <Reviews />
            <Footer />
        </div>
    )
}
export default AboutPage;