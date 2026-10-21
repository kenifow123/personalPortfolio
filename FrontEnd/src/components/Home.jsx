import styles from './Home.module.css'
import PipeBackground from './/PipeBackground.jsx';

const Home = () => {

    return (
        <div id='home'>
            <PipeBackground />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Hello! I'm Kenneth</h1>
                    <p>Web Dev</p>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    )
}

export default Home;