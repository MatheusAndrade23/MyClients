import styles from './Client.module.css'

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Input from '../forms/Input'

function Client(){

    let { id } = useParams()
    const navigate = useNavigate()

    const [Client, setClient] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/clients`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            
        })
    }, [id])

    function handleChange(e) {
        setClient({ ...Client, [e.target.name]: e.target.value })
    }

    const handleFinalizarClick = (e) => {

        e.preventDefault()
    }

    return(

        <form className={styles.container}>
            <h1>Dados do Cliente</h1>
            <Input type="text" placeholder={Client.name} text="Nome"  handleOnChange={handleChange} name="name"/>
            <Input type="text" placeholder={Client.total} text="Conta"  handleOnChange={handleChange}  name="total"/>
            <button type="submit" className={styles.btn} onClick={handleFinalizarClick}>Finalizar</button>
        </form>
    )
}

export default Client;