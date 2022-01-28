import styles from "./ContaCard.module.css"

import SubmitButton from "../forms/SubmitButton"

function ContaCard({data, valor, titulo, handleRemove, _id}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(_id, valor)
    }

    return(
        <div className={styles.container}>
            <h1>{titulo}</h1>
            <p>Data: {data}</p>
            <p>Valor: {valor} R$</p>
            <SubmitButton value="Excluir" event={remove}/>
        </div>
    )
}

export default ContaCard