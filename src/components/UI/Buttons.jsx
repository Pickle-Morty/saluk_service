import styles from "./Buttons.module.scss"



export function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={styles.nextArrow}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={styles.prevArrow}
            onClick={onClick}
        />
    );
}
