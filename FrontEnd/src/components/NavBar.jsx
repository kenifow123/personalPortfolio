import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div id={styles.navigation}>
            <div className={styles.container}>
                <nav className={styles.navbarMenu}>
                    <ul>
                        <li><Link className={styles.link} to='/'>Home</Link></li>
                        <li><Link className={styles.link} to='/about'>About</Link></li>
                        <li><Link className={styles.link} to='/projects'>Projects</Link></li>
                        <li><Link className={styles.link} to='/contact'>Contact</Link></li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default NavBar;