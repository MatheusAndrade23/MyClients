import { useState, useEffect } from 'react'

import styles from './Clients.module.css'

import Client from '../layouts/ClientCard'
import Loading from '../layouts/Loading'

function Clients(){

    const [clients, setClients] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {

        fetch('http://localhost:5000/clients', {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((resp) => resp.json())
            .then((data) => {
            setClients(data)
            setRemoveLoading(true)
        })
    }, [])

    function HandleExcluir(id){

        fetch(`http://localhost:5000/clients/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setClients(clients.filter((client) => client.id !== id))
        })
    }

    return (
        <>
            <h1 className={styles.titulo}>Clientes:</h1>
            <div className={styles.container}>
                {clients.length > 0 &&
                clients.map((client) => (
                    <Client nome={client.name} contato={client.contato} id={client.id} key={client.id} total={client.total} excluirEvent={HandleExcluir}/>
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && clients.length === 0 && (
                <p className={styles.p}>Não há clientes cadastrados!</p>
                )}
            </div>
        </>
    )
}

export default Clients

