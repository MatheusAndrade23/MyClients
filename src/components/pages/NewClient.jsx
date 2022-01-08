import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { v4 } from 'uuid'

import styles from './NewClients.module.css'

import Input from '../forms/Input'
import SubmitButton from '../forms/SubmitButton'

function NewClient(){

    const navigate = useNavigate()
    const [Client, setClient] = useState([])

    function handleChange(e) {
        setClient({ ...Client, [e.target.name]: e.target.value })
    }

    const handleFinalizarClick = (e) => {

        e.preventDefault()

        if(Client.name){

            if(!Client.total){Client.total = 0}

            Client.id = v4()

            fetch('http://localhost:5000/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Client),
            })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/clients')
            })
        }
    }

    return(

        <form className={styles.form}>
            <h1>Adicionar Cliente</h1>
            <p className={styles.paragrafo}>Cadastre o cliente e depois adicione as contas!</p>
            <Input type='text' placeholder='Digite o nome do Cliente' text='Nome:' handleOnChange={handleChange} name="name"/>
            <Input type='text' placeholder='Digite o valor da conta do Cliente' text='Conta:' handleOnChange={handleChange} name="total"/>
            <SubmitButton event={handleFinalizarClick} value="Finalizar"/>
        </form>
    )
}

export default NewClient