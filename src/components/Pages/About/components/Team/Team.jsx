import React from "react";
import styles from "../Team/Team.module.scss";
import ava from '../../../../img/content/AboutPage/Rectangle26.png';
import Slider from "react-slick";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={styles.nextArrow}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={styles.prevArrow}
			onClick={onClick}
		/>
	);
}

const Team = () => {

	const settings = {
		className: styles.team__slider,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		swipe: false,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					className: "slider",
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 2,


				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2

				}
			}
		],

		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};



	const teamData = [
		{
			name: 'Салиева Нургул', position: 'Директор',
			img: ava
		},
		{
			name: 'Качкынбай уулу  Шамшыбек', position: 'Заместитель  директора',
			img: ava
		},
		{
			name: 'Мукашев Тимур', position: 'Начальник',
			img: ava
		},
		{
			name: 'Антон Кан', position: 'Начальник',
			img: ava
		},
	]



	return (
		<div>
			<div className={styles.wrapper}>
				<section className={styles.team}>
					<div className={styles.team__title}>Команда </div>
					<div className={styles.team__container}>
						<div className={styles.team__body}>
							<div className={styles.team__descr}>Познакомьтесь с удивительными и творческими членами нашей команды</div>
							<Slider {...settings}>{teamData.map((person, id) => <div key={id} className={styles.team__blocks}>
								<div className={styles.personal__block}>
									<img src={ava} alt="" />
									<div className={styles.personal__block_title}>{person.name}</div>
									<div className={styles.personal__block_descr}>{person.position}</div>
								</div>
							</div>)}
							</Slider>

							{/* <div className={styles.personal__block}>
									<img src={ava} alt="" />
									<div className={styles.personal__block_item}>
										<div className={styles.personal__block_title}>Качкынбай уулу <br /> Шамшыбек</div>
										<div className={styles.personal__block_descr}>Заместитель <br /> директора</div>
									</div>
								</div>
								<div className={styles.personal__block}>
									<img src={ava} alt="" />
									<div className={styles.personal__block_item}></div>
									<div className={styles.personal__block_title}>Мукашев Тимур</div>
									<div className={styles.personal__block_descr}>Начальник</div>
								</div>
								<div className={styles.personal__block}>
									<img src={ava} alt="" />
									<div className={styles.personal__block_item}>
										<div className={styles.personal__block_title}>Антон Кан</div>
										<div className={styles.personal__block_descr}>Начальник</div>
									</div>

								</div> */}

						</div>
					</div>
				</section>
			</div>


		</div>
	)
}

export default Team;