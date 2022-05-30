import React, {useEffect, useState} from 'react';
import styles from "./NewsCardBig.module.scss"
import arrowRight from "../../../img/icons/arrowRightGreen.svg"



const NewsCardBig = ({
    image,
    date,
    text,
    title,
    link
}) => {


    return (
        <div className={styles.box}>
            <img src={image} alt="" className={styles.img} />
            <div className={styles.date}>ОПУБЛИКОВАНО { date}</div>
            <h3 className={styles.title}>{ title}</h3>
            <div className={styles.text}> { text}</div>
            <div className={styles.link}>Читать подробнее <img src={arrowRight} alt=""/></div>
        </div>
    )
}

export default NewsCardBig