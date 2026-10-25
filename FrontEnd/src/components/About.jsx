import styles from './About.module.css'
import ServicesCard from './ServicesCard.jsx'
import defaultAvatar from '../assets/defaultAvatar.jpg'
import monitor from '../assets/monitor.png'
import web from '../assets/web.png'
import business from '../assets/business.png'

const About = () => {
    return (
        <div id={styles.about}>
            <h1>About</h1>
            <div className={styles.container}>

                <div className={styles.row}>
                    <img src={defaultAvatar} alt="head portrait img"/>
                    <div className={styles.textContent}>
                        <h2>I'm Kenneth Ao. </h2>
                        <p>I'm a Full Stack Engineer. I build user-friendly and responsive applications to help people and businesses meet their needs.</p>
                        <div className={styles.line}><p><strong>Location:</strong>Los Angeles</p></div>
                        <p><strong>Language:</strong>English</p>
                        <p><strong>Hobbies:</strong>Fishing, Sports, Camping</p>
                        <p><strong>Email:</strong>kennethao123@gmail.com</p>
                        <p><strong>Status:</strong>Available for hire</p>
                    </div>
                </div>

                <h1>Services</h1>
                <div className={styles.services}>
                    <div className={styles.cardContainer}>
                        <ServicesCard title={'Web Development'} icon={web} content={'Websites and web applications'}/>
                        <ServicesCard title={'Desktop Apps'} icon={monitor} content={'Desktop applications to get things done'}/>
                        <ServicesCard title={'Small Business Solutions'} icon={business} content={'Technical support'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;