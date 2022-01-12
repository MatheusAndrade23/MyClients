import styles from "./ClientForm.module.css"

function ClientForm({nome, contato}){

    return(
        <div className={styles.form}>
            <p>Digite o novo Nome:</p>
            <input type="text" placeholder={nome} name="nome"/>
            <p>Digite o novo Contato:</p>
            <input type="text" placeholder={contato} name="contact"/>
            <button>Finalizar</button>
        </div>
    )
}

export default ClientForm