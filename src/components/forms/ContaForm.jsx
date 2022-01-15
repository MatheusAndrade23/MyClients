import { useState } from 'react'

import styles from './ContaForm.module.css'

function ContaForm({handleSubmit, contasData}){

    const [conta, setConta] = useState({})

    const submit = (e) => {

        e.preventDefault()
        contasData.contas.push(conta)
        handleSubmit(contasData)
    }

    function handleChange(e) {
        setConta({ ...conta, [e.target.name]: e.target.value })
    }

    return(

        <div className={styles.form}>
            <p>Título:</p>
            <input placeholder="Digite o título:" type="text" name="titulo" onChange={handleChange} />
            <p>Data:</p>
            <input placeholder="__/__/____"  name="data" type="text" onChange={handleChange} />
            <p>Valor:</p>
            <input placeholder="Digite o valor:"  type="text" name="valor" onChange={handleChange} />
            <button onClick={submit}>Finalizar</button>
        </div>
    )
}

export default ContaForm;