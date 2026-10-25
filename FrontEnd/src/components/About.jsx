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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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