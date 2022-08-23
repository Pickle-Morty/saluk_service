import React from "react";
import styles from "../Conversation/Conversation.module.scss"
import messageIcon from "../../../../img/icons/messageIcon__white.png"
import arrowLeft from "../../../../img/icons/arrowLeftYellow.png"

const Conversation = () => {

    return(
        <div className={styles.box}>
           <button className={styles.btn}>Давайте поговорим <img src={messageIcon} alt="" /></button>
           <a href="" className={styles.linkBtn_m}>Посмотреть портфолио<img src={arrowLeft} alt="" /></a>
        </div>
    )
}
export default Conversation;