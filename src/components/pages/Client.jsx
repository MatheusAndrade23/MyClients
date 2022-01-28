import styles from './Client.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid'

import Loading from '../layouts/Loading'
import SubmitButton from '../forms/SubmitButton'
import ContaForm from '../forms/ContaForm'
import ClientForm from '../forms/ClientForm'
import ContaCard from '../layouts/ContaCard'

function Client(){

    let { id } = useParams()

    const [Client, setClient] = useState()
    const [Contas, setContas] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [showClientForm, setShowClientForm] = useState(false)
    const [showContasForm, setShowContasForm] = useState(false)

    useEffect(() => {

        fetch (`https://myclients-backend-matheusandrade23.vercel.app/${process.env.REACT_APP_LINK}/${id}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setClient(data);
            setRemoveLoading(true);
            setContas(data.contas);
        })
    }, [id])

    function ShowContas(){
        setShowContasForm(!showContasForm);
    }

    function ShowEditar(){
        setShowClientForm(!showClientForm);
    }

    function removeConta(_id, valor) {

        const contasUpdated = Client.contas.filter((conta) => conta._id !== _id)

        const clientUpdated = Client

        clientUpdated.contas = contasUpdated
        clientUpdated.total = parseFloat(clientUpdated.total) - parseFloat(valor)

        fetch(`https://myclients-backend-matheusandrade23.vercel.app/${process.env.REACT_APP_LINK}/${clientUpdated._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientUpdated),
        })
        .then((resp) => resp.json())
        .then((data) => {

            setClient(clientUpdated)
            setContas(contasUpdated)
        })
    }

    function createConta(Client) {

        const lastConta = Client.contas[Client.contas.length - 1]
    
        lastConta._id = v4()

        const clientUpdated = Client
        clientUpdated.total = parseFloat(clientUpdated.total) + parseFloat(lastConta.valor)
    
        fetch(`https://myclients-backend-matheusandrade23.vercel.app/${process.env.REACT_APP_LINK}/${Client._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(clientUpdated),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setContas(data.contas)
            setShowContasForm(!showContasForm)
        })
    }

    function editClient(client) {

        fetch(`https://myclients-backend-matheusandrade23.vercel.app/${process.env.REACT_APP_LINK}/${Client._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(client),
        })
          .then((resp) => resp.json())
          .then((data) => {

            setClient(data)
            setShowClientForm(!showClientForm)

        })
    }
    
    return(

        <div className={styles.container}>
            {Client &&
            <div className={styles.dados}>
                <div className={styles.dados2}>
                    <h1>Nome: {Client.name}</h1>
                    {!showClientForm && (
                    <>
                        <h3>Edite as informações, se necessário!</h3>
                        <p>Contato: {Client.contato}</p>
                        <p>Conta Total: <span>{Client.total} R$</span></p> 
                    </>)}
                    {showClientForm && (<ClientForm nome={Client.name} contato={Client.contato} handleSubmit={editClient}/>)}
                </div>
                <div>
                    <button className={styles.btn} onClick={ShowEditar}>{!showClientForm ? "Editar" : "Cancelar"}</button>
                </div>
            </div>}
            <div className={styles.adicionar}>
                <div className={styles.adicionarHeader}>
                    <h4>Adicionar Conta:</h4>
                    <SubmitButton value={!showContasForm ? "Adicionar" : "Cancelar"} event={ShowContas}/>
                </div>
                {showContasForm && (<ContaForm handleSubmit={createConta} contasData={Client}/>)}
            </div>
            <div className={styles.contas}>
                {Contas.length === 0 ? <p>Não há contas cadastradas.</p> : <h4>Contas:</h4>}
                <div>
                    {Contas.length > 0 && (
                        Contas.map((dados) => ( 
                            <ContaCard 
                            data={dados.data} 
                            valor={dados.valor} 
                            titulo={dados.titulo}
                            key={dados._id} 
                            id={dados._id} 
                            handleRemove={removeConta}/>
                        ))
                    )}
                </div>
            </div>
            {!removeLoading && <Loading/>}
        </div>
    )
}

export default Client;