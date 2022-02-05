import {FaLinkedin, FaGithub} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){

    return (
        <footer className={styles.footer}>
            <ul className={styles.ul}>
                <li><a href='https://www.linkedin.com/in/matheus-andrade-478b04207/' className={styles.item}><FaLinkedin/></a></li>
                <li><a href='https://github.com/MatheusAndrade23' className={styles.item}><FaGithub/></a></li>
            </ul>
        </footer>
    )
};

export default Footer;