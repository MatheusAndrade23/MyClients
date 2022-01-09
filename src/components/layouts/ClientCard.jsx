import styles from './ClientCard.module.css'

import LinkButton from './LinkButton'

function Client({nome, contato, id, excluirEvent}){

    const remove = (e) => {
        e.preventDefault()
        excluirEvent(id)
    }

    return(
        <div className={styles.container}>
            <span className={styles.title}>{nome}</span>
            <p>Contato: <span>{contato}</span></p>
            <div className={styles.buttons}>
                <LinkButton to={`/client/${id}`} text="Detalhes"/>
                <button className={styles.btn} onClick={remove}>Excluir</button>
            </div>
        </div>
    )
}

export default Client