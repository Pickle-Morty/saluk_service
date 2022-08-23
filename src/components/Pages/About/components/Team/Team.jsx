import React from "react";
import styles from "../Team/Team.module.scss";

const Team = () => {
    // const teamData = [
    //     {name: 'Салиева Нургул', position: 'Директор'},
    //     {name: 'Качкынбай уулу Шамшыбек', position: 'Заместитель директора'},
    //     {name: 'Мукашев Тимур', position: 'Начальник'},
    //     {name: 'Антон Кан', position: 'Начальник'}
    // ]

    return (
        <div>
            <div className={styles.wrapper}>
		<section className={styles.team}>
			<div className={styles.team__container_container}>
				<div className={styles.team__body}>
					<div className={styles.team__title_descr}>
						<div className={styles.team__title}>Команда </div>
						<div className={styles.team__descr}>Познакомьтесь с удивительными и творческими членами нашей команды</div>
					</div>
					
					<div className={styles.personal__blocks}>
						<div className={styles.personal__block}>
							
							<div className={styles.personal__block_item}></div>
							<div className={styles.personal__block_title}>Салиева Нургул</div>
							<div className={styles.personal__block_descr}>Директор</div>
						</div>
						<div className={styles.personal__block}>
							
							<div className={styles.personal__block_item}>
								<div className={styles.personal__block_title}>Качкынбай уулу Шамшыбек</div>
								<div className={styles.personal__block_descr}>Заместитель <br/> директора</div>
							</div>
							
						</div>
						<div className={styles.personal__block}>
							
							<div className={styles.personal__block_item}></div>
							<div className={styles.personal__block_title}>Мукашев Тимур</div>
							<div className={styles.personal__block_descr}>Начальник</div>
						</div>
						<div className={styles.personal__block}>
							
							<div className={styles.personal__block_item}>
								<div className={styles.personal__block_title}>Антон Кан</div>
							<div className={styles.personal__block_descr}>Директор</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>


        </div>
    )
}

export default Team;