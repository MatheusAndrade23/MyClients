import styles from './Client.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../layouts/Loading';
import SubmitButton from '../forms/SubmitButton'

function Client(){

    let { id } = useParams()

    const [Client, setClient] = useState()
    const [Counts, setCounts] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {

        fetch (`http://localhost:5000/clients/${id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setClient(data);
            setRemoveLoading(true);
            setCounts(data.counts);
        })
    }, [id])

    return(

        <div className={styles.container}>
            {Client &&
            <div className={styles.dados}>
                <h1>Nome: {Client.name}</h1>
                <h3>Edite as informações, se necessário!</h3>
                <p>Contato: {Client.contato}</p>
                <p>Conta Total: <span>{Client.total} R$</span></p>
            </div>}
            <div className={styles.adicionar}>
                <h4>Adicionar Conta:</h4>
                <SubmitButton value="Adicionar"/>
            </div>
            <div className={styles.contas}>
                {Counts.length === 0 && <p>Não há contas cadastradas.</p>}
                {Counts.length > 0 &&
                    <h4>Contas:</h4>
                }
            </div>
            {!removeLoading && <Loading/>}
        </div>
    )
}

export default Client;