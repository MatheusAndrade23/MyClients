import styles from "./ContaCard.module.css"

import SubmitButton from "../forms/SubmitButton"

function ContaCard({data, valor, titulo}){

    return(
        <div className={styles.container}>
            <h1>{titulo}</h1>
            <p>Data: {data}</p>
            <p>Valor: {valor} R$</p>
            <SubmitButton value="Excluir"/>
        </div>
    )
}

export default ContaCard