import React from "react";
import  styles  from "../Title/Title.module.scss"

const Title = () => {

    return (
        <div>
            <div className={styles.about}>О нас</div>
            <div className={styles.title}>
                Мы помогаем <span className={styles.color_green} >государству</span> и  <span className={styles.color_yellow}>бизнесу</span> воплощать свои идеи в жизнь
            </div>
        </div>
    )
}


export default Title;