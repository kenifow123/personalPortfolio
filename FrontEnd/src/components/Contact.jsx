import styles from './Contact.module.css'
import cardStyles from './Card.module.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import ContactUs from './ContactUs.jsx'

const linkedinUrl = 'https://www.linkedin.com/in/kenneth-ao-a5271510b';
const githubUrl = 'https://github.com/kenifow123';

const Contact = () => {

    const newTab = (url) => {
        console.log(url);
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div id={styles.contact}>
            <div className={styles.container}>
                <h1>Contact</h1>
                <hr/>
                <div className={styles.cardDiv}>
                    <div className={cardStyles.card}>
                        <div className={styles.contactTitleDiv}>
                            <img className={cardStyles.icon} src={mail} alt=""/>
                            <h3>Email</h3>
                        </div>
                        <h3>kennethao123@gmail.com</h3>
                    </div>

                    <div className={cardStyles.card}>
                        <h3>Social Media</h3>
                        <div className={styles.buttonsDiv}>
                            <button onClick={ () => newTab(linkedinUrl) }><img className={cardStyles.icon} src={github} alt=""/></button>
                            <button onClick={ () => newTab(githubUrl) }><img className={cardStyles.icon} src={linkedin} alt="linkedIn"/></button>
                        </div>
                    </div>
                </div>

                <ContactUs/>

            </div>
        </div>
    )
}

export default Contact;