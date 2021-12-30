import styles from './PageNotFound.module.css'

function PageNotFound(){

    return(

        <div className={styles.container}>
            <h1>Erro 404</h1>
            <p>Esta página não existe!</p>
            <h1 className={styles.logo}>MyC</h1>
        </div>
        
    )
}

export default PageNotFound