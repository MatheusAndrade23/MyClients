import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange}){

    return( 
    <>
        <p className={styles.texto}>{text}</p>
        <input type={type} placeholder={placeholder} className={styles.input} onChange={handleOnChange} name={name}/>
    </>
    )
}

export default Input