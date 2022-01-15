import styles from './Input.module.css'

function Input({handleOnChange, type, name, placeholder, text}){
    
    return( 
    <> 
        <p className={styles.texto}>{text}</p>
        <input type={type} placeholder={placeholder}  onChange={handleOnChange} name={name} className={styles.input}/>
    </>
    )
}

export default Input;