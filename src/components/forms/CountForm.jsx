import styles from './CountForm.module.css'

function CountForm(){

    return(
        <div className={styles.form}>
            <p>Título:</p>
            <input placeholder='Digite o título'/>
            <p>Data:</p>
            <input placeholder='__/__/____'/>
            <p>Valor:</p>
            <input placeholder='Digite o valor'/>
            <button>Finalizar</button>
        </div>
    )
}

export default CountForm;