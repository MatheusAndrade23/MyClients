import { useState } from 'react'

import styles from "./ClientForm.module.css"

function ClientForm({nome, contato, handleSubmit}){

    const [client, setClient] = useState({})

    function handleChange(e) {
        setClient({ ...client, [e.target.name]: e.target.value })
    }

    const submit = (e) => {

        e.preventDefault()
        handleSubmit(client)
    }

    return(

        <div className={styles.form}>
            <p>Digite o novo Nome:</p>
            <input type="text" placeholder={nome} name="name" onChange={handleChange}/>
            <p>Digite o novo Contato:</p>
            <input type="text" placeholder={contato} name="contato" onChange={handleChange}/>
            <button onClick={submit}>Finalizar</button>
        </div>
    )
}

export default ClientForm;