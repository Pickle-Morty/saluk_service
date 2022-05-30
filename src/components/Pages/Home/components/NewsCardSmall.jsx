import React, {useEffect, useState} from 'react';
import styles from "./NewsCardSmall.module.scss"




const NewsCardSmall = ({
    image,
    date,
    text,
    title,
}) => {


    return (
        <div className={styles.box}>
            <img src={image} alt="" className={styles.img} />
            <div className="">
                <div className={styles.date}>ОПУБЛИКОВАНО {date}</div>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </div>
    )
}

export default NewsCardSmall