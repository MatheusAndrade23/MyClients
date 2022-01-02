import styles from './ClientCard.module.css'

import LinkButton from './LinkButton'

function Client({nome, total, id}){

    return(
        <div className={styles.container}>
            <span className={styles.title}>{nome}</span>
            <p>Conta: <span>{total} R$</span></p>
            <div className={styles.buttons}>
                <LinkButton to={`/client/${id}`} text="Editar"/>
                <LinkButton to={`/clients`} text="Excluir"/>
            </div>
        </div>
    )
}

export default Client