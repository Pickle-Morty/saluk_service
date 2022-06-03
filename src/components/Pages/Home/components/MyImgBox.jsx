import React, {useEffect, useRef, useState} from 'react';
import styles from "./MyImgBox.module.scss"
import backgroundHeroImg from "../../../img/content/homePage/backgroundHeroImg.svg"


const MyImgBox = ({array}) => {
    const [display, setDisplay] = useState('block')

    const [id, setId] = useState(0)


    const animateCycle = (array) => {
        const lastImg = array.length - 1
        setTimeout(() => {
            if (id === lastImg) {
                setId(0)
            } else {
                setId(id + 1)
            }
        }, 5000)
    }
    animateCycle(array)

    const refTarget = useRef()

    useEffect(() => {
        setDisplay(prev => ('none'))
        setTimeout(() => {
            setDisplay(prev => ('block'))
        }, 30)
    }, [id])
    return (
        <div ref={refTarget} className={styles.boxImg} >
            <img style={{display: display}} src={backgroundHeroImg} className={styles.img__background} />
            <div className={styles.img__wrapper}>
                <img src={array[id]} alt="" className={styles.img} />
                <img style={{display: display}} src={array[id]} alt="" className={styles.img__visible} />
            </div>
            
        </div>

    )
}

export default MyImgBox