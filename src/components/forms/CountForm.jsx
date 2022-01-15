import { useState } from 'react'

import styles from './CountForm.module.css'

function CountForm({handleSubmit, projectData}){

    const [conta, setConta] = useState({})

    const submit = (e) => {

        e.preventDefault()
        projectData.services.push(conta)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setConta({ ...conta, [e.target.name]: e.target.value })
        console.log(conta);
    }

    return(

        <div className={styles.form}>
            <p>Título:</p>
            <input placeholder="Digite o título:" type="text" name="titulo" handleOnChange={handleChange} />
            <p>Data:</p>
            <input placeholder="__/__/____"  name="data" type="text" handleOnChange={handleChange} />
            <p>Valor:</p>
            <input placeholder="Digite o valor:"  type="text" name="valor" handleOnChange={handleChange} />
            <button onClick={submit}>Finalizar</button>
        </div>
    )
}

export default CountForm;