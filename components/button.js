import styles from '../styles/components/Button.module.css'


export default function Button({ label1, label2, bg }) {
    return (
        <button className={`${styles.styledButton} ${bg && styles.styledButtonBG}`}>{label1}<br />{label2}</button>
    )
}