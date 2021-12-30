import styles from './SubmitButton.module.css'

function SubmitButton({event, value}){

    return <input type="submit" onClick={event} value={value} className={styles.submitbutton}/>
}

export default SubmitButton 