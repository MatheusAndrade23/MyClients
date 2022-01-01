import styles from './ClientCard.module.css'

import LinkButton from './LinkButton'

function Client({nome, total, id}){

    return(
        <div className={styles.container}>
            <p>Nome: <span>{nome}</span></p>
            <p>Conta: <span>{total} R$</span></p>
            <LinkButton to={`/client/${id}`} text="Acessar"/>
        </div>
    )
}

export default Client