import styles from "./Team.module.scss"
import arrowLeftBtn from "../../../img/icons/arrowLeftBtn.svg"
import arrowRightBtn from "../../../img/icons/arrowRightBrn.svg"
import backgroundTeam from "../../../img/content/homePage/backgroundTeam.svg"
import Slider from "react-slick";
// import img1 from 'https://previews.123rf.com/images/pressmaster/pressmaster1704/pressmaster170400062/75330432-banquero-elegante.jpg'

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
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const teamData = [
        {
            name: 'Салиева Нургул', position: 'Директор',
            img: 'https://www.caproasia.com/wp-content/uploads/2015/08/Priority-Banker-Girl-Office-3.jpg',
            text: 'Наша команда создателей цифровых продуктов поднимет вашу идею на новый уровень и поможет вам с вашим продуктом.',
            title: 'Команда Салык Сервис',
            subtitle: 'Команда креативщиков Who Excited поможет вам с вашей идеей'
        },
        {
            name: 'Дастан Бообеков', position: 'Менеджер',
            img: 'https://previews.123rf.com/images/pressmaster/pressmaster1704/pressmaster170400062/75330432-banquero-elegante.jpg',
            text: 'Lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo',
            title: 'Команда Салык Сервис',
            subtitle: 'Команда маркетологов Who Excited поможет вам продать вашу идею'
        },
    ]

    return (
        <section className={styles.team}>
            <Slider {...settings}>
                {teamData.map((person, id )=> <div key = {id} className={styles.team__slider_wrapper}>
                    <div className={styles.team__wrapper}>
                        <div className={styles.team__col}>
                            <h2 className={styles.team__title}>{ person.title}</h2>
                            <div className={styles.team__subtitle}>{ person.subtitle}</div>
                            <div className={styles.team__discription}>{ person.text}</div>
                        </div>
                        <div className={styles.team__col}>
                            <div className={styles.teamCard}>
                                <div className={styles.teamCard__wrapper_img}>
                                    <img src={person.img} alt="" className={styles.teamCard__img} />
                                </div>
                                <div className={styles.teamCard__title}>{ person.name}</div>
                                <div className={styles.teamCard__position}>{ person.position}</div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </Slider>
            <img className={styles.team__background} src={backgroundTeam} alt="" />
        </section>
    )
}

export default Team