import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import styles from './NewClient.module.css'

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

            if(Client.name && Client.contato){

                Client.total = 0;
                Client.contas = [];

                fetch(`https://myclients-backend.vercel.app/${process.env.REACT_APP_LINK}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Client),
                })
                .then((resp) => resp.json())
                .then((data) => {
                    navigate('/clients');
                })
            }
            else{
                // Aparecer um aviso
            }
        }
    }

    return(

        <div className={styles.container}>
            <form className={styles.form}>
                <h1>Adicionar Cliente</h1>
                <p className={styles.paragrafo}>Cadastre o cliente e depois adicione as contas!</p>
                <Input type='text' placeholder='Digite o nome do Cliente' text='Nome:' handleOnChange={handleChange} name="name"/>
                <Input type='text' placeholder='Digite o contato do Cliente' text='Contato:' handleOnChange={handleChange} name="contato"/>
                <SubmitButton event={handleFinalizarClick} value="Finalizar"/>
            </form>
        </div>
    )
}

export default NewClient;