import styles from './NewClients.module.css'

import Input from '../forms/Input'
import SubmitButton from '../forms/SubmitButton'

function NewClient(){

    return(

        <form className={styles.form}>
            <h1>Adicionar Cliente</h1>
            <p className={styles.paragrafo}>Adicione o cliente para depois adicionar suas contas!</p>
            <Input type='text' placeholder='Digite o nome do Cliente' text='Nome:'/>
            <Input type='text' placeholder='Digite o número do Cliente' text='Contato:'/>
            <SubmitButton value='Enviar'/>
        </form>
    )
}

export default NewClient