import {Link} from 'react-router-dom'

import styles from './Header.module.css'

function Header(){

    return(

        <header className={styles.header}>
            <Link to="/"><h1 className={styles.logo}>My<span>Clients</span></h1></Link>
            <nav>
                <Link to="/" className={styles.item}>Home</Link>
                <Link to="/clients" className={styles.item}>Clientes</Link>
            </nav>
        </header>  
    )
};

export default Header;