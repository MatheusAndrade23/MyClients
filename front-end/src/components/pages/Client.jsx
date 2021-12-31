import styles from './Client.module.css'

import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Input from '../forms/Input'

function Client(){

    let { id } = useParams()
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
            data.map((value, index) => {
                if(id === value._id){
                    setClient(data[index])
                }
            })
        })
    }, [id])

    function handleFinalizarClick(){
        
    }

    return(

        <div className={styles.container}>
            <h1>Dados do Cliente</h1>
            <Input type="text" placeholder={Client.name} text="Nome"/>
            <Input type="text" placeholder={Client.total} text="Conta"/>
            <Link to="/clients" className={styles.btn} onClick={handleFinalizarClick}>Finalizar</Link>
        </div>
    )
}

export default Client;