import styles from './Input.module.css'

function Input({type, placeholder, text}){

    return( 
    <>
        <p className={styles.texto}>{text}</p>
        <input type={type} placeholder={placeholder} className={styles.input}/>
    </>
    )
}

export default Input