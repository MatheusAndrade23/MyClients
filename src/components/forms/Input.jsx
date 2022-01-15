import styles from './Input.module.css'

function Input({handleOnChange, type, name, placeholder}){
    
    return( 
    <>
        <input type={type} placeholder={placeholder}  onChange={handleOnChange} name={name} className={styles.input}/>
    </>
    )
}

export default Input;