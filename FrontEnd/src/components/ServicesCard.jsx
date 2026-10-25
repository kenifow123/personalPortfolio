import styles from './Card.module.css'

const ServicesCard = ({icon, title, content}) => {

    return (
        <div className={styles.card}>
            <img className={styles.icon} src={icon} alt="logo"/>
            <h2>{title}</h2>
            <hr/>
            <p>{content}</p>
        </div>
    )
}

export default ServicesCard;