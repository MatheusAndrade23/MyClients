import LinkButton from '../layouts/LinkButton'

import styles from './Home.module.css'

function Home(){

    return (

        <div className={styles.container}>
            <h1>Bem-Vindo ao <span>MyClients</span></h1>
            <span>Gerencie a dívida de seus clientes agora mesmo!</span>
            <LinkButton to="/newclient" text="Adicionar Cliente"/>
            <h2 className={styles.logo}>MyC</h2>
        </div> 
    );
}

export default Home