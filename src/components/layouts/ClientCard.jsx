import styles from './ClientCard.module.css'

import LinkButton from './LinkButton'

function Client({total, nome, contato, _id, excluirEvent}){

    const remove = (e) => {
        e.preventDefault()
        excluirEvent(_id)
    }

    return(
        <div className={styles.container}>
            <span className={styles.title}>{nome}</span>
            <p>Contato: <span>{contato}</span></p>
            <p>Total: <span>{total}</span> R$</p>
            <div className={styles.buttons}>
                <LinkButton to={`/client/${_id}`} text="Detalhes"/>
                <button className={styles.btn} onClick={remove}>Excluir</button>
            </div>
        </div>
    )
}

export default Client