import styles from './Input.module.css'

function Input({handleOnChange, type, text, name, placeholder}){
    
    return( 
    <>
        <p className={styles.texto}>{text}</p>
        <input type={type} placeholder={placeholder}  onChange={handleOnChange} name={name} className={styles.input} />
    </>
    )
}

export default Input;