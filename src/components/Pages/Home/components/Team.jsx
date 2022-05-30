import styles from "./Team.module.scss"
import arrowLeftBtn from  "../../../img/icons/arrowLeftBtn.svg"
import arrowRightBtn from "../../../img/icons/arrowRightBrn.svg"

const Team = () => {

    return (
        <section className={styles.team}>
            <div className={styles.team__wrapper}>
                <div className={styles.team__col}>
                    <h2 className={styles.team__title}>Команда Салык Сервис</h2>
                    <div className={styles.team__subtitle}>Команда креативщиков Who Excited поможет вам с вашей идеей</div>
                    <div className={styles.team__discription}>Наша команда создателей цифровых продуктов поднимет вашу идею на новый уровень и поможет вам с вашим продуктом.</div>
                </div>
                <div className={styles.team__col}>
                    <div className={styles.teamCard}>
                        <div className={styles.teamCard__wrapper_img}>
                            <img src='' alt="" className={styles.teamCard__img} />
                        </div>
                        <div className={styles.teamCard__title}>Салиева Нургул</div>
                        <div className={styles.teamCard__position}>Директор</div>
                    </div>
                    <div className={styles.team__wrapper_btns}>
                        <img src={arrowLeftBtn} alt="" className="team__btn" />
                        <img src={arrowRightBtn} alt="" className="team__btn" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team